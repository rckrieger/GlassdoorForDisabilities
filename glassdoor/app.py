from flask import Flask, Blueprint, jsonify, request, abort
from flask_sqlalchemy import SQLAlchemy

from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

api = Blueprint('api', __name__)


# Models
class Review(db.Model):
    __tablename__ = 'review'

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer)
    comments = db.Column(db.Text)
    timestamp = db.Column(db.DateTime)
    company_id = db.Column(db.Integer, db.ForeignKey('company.id'))
    company = db.relationship('Company', back_populates='reviews')
    ratings = db.relationship('Rating', back_populates='review')

    def __init__(self, comments, timestamp, company_id, ratings):
        self.comments = comments
        self.timestamp = timestamp
        self.company_id = company_id
        self.ratings = ratings

    def to_dict(self):
        ratings = [r.id for r in self.ratings]
        return {'id':           self.id,
                'comments':     self.comments,
                'timestamp':    self.timestamp.timestamp(),
                'company':      self.company.id,
                'ratings':      ratings}

    @staticmethod
    def from_dict(obj):
        return Review(obj['comments'],
                      datetime.fromtimestamp(obj['timestamp']),
                      obj['company_id'],
                      [])


class Company(db.Model):
    __tablename__ = 'company'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), unique=True)
    description = db.Column(db.Text, nullable=True)
    affiliate = db.Column(db.Boolean)
    owner = db.Column(db.String(128), nullable=True)
    reviews = db.relationship('Review', back_populates='company')

    def __init__(self, name, description, affiliate, owner, reviews):
        self.name = name
        self.descption = description
        self.affiliate = affiliate
        self.owner = owner
        self.reviews = reviews

    def to_dict(self):
        reviews = [r.id for r in self.reviews]
        return {'id':           self.id,
                'name':         self.name,
                'description':  self.description,
                'affiliate':    self.affiliate,
                'owner':        self.owner,
                'reviews':      reviews}

    @staticmethod
    def from_dict(obj):
        return Company(obj['name'], obj['description'], obj['owner'], [])


class Rating(db.Model):
    __tablename__ = 'rating'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), unique=True)
    score = db.Column(db.Integer)
    review_id = db.Column(db.Integer, db.ForeignKey('review.id'))
    review = db.relationship("Review", back_populates='ratings')

    def __init__(self, name, score, review_id):
        self.name = name
        self.score = score
        self.review_id = review_id

    def to_dict(self):
        return {'id':           self.id,
                'name':         self.name,
                'score':        self.score,
                'review_id':    self.review_id}

    @staticmethod
    def from_dict(obj):
        return Rating(obj['name'], obj['score'], obj['review_id'])


class JobPosting(db.Model):
    __tablename__ = 'job_posting'

    id = db.Column(db.Integer, primary_key=True)


class_strings = {'review': Review,
                 'company': Company,
                 'rating': Rating}


# Routes
@api.route('/<data_type>/all', methods=['GET'])
def dump_all(data_type):
    dt = class_strings[data_type]
    return jsonify([r.to_dict() for r in dt.query.all()])


@api.route('/<data_type>/<id>', methods=['GET'])
def dump_instance(data_type, id):
    dt = class_strings[data_type]
    item = dt.query.filter_by(id=id).first()
    return jsonify(item.to_dict())


@api.route('/<data_type>/add', methods=['POST'])
def add_class(data_type):
    dt = class_strings[data_type]
    if not request.json:
        abort(400)
    r = dt.from_dict(request.json)
    db.session.add(r)
    db.session.commit()
    return jsonify({'id': r.id}), 201


if __name__ == '__main__':
    db.create_all()
    app.register_blueprint(api, url_prefix='/api/v1')
    app.run()
