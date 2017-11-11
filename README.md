# GlassdoorForDisabilities

to access the api
```
/api/review/all - Get all the reviews
/api/company/all - Get all the companies
/api/job/all - Get all the jobs
/api/rating/all - Get all the ratings

/api/review/<id> - Get <id> review
/api/company/<id> - Get <id> companie
/api/job/<id> - Get <id> job
/api/rating/<id> - Get <id> rating

/api/review/add - Add review
{'id':           self.id,
 'comments':     self.comments,
 'timestamp':    self.timestamp,
 'type':         self.type.name,
 'company':      self.company.id,
 'ratings':      ratings
}

/api/company/add - Add company
{'id':           self.id,
'name':         self.name,
'description':  self.description,
'affiliate':    self.affiliate,
'owner':        self.owner,
'reviews':      reviews}

/api/rating/add - Add rating
{'id':           self.id,
'name':         self.name,
'score':        self.score,
'review_id':    self.review_id}

/api/job/add - Add Job
{'id':               self.id,
'title':            self.title,
'company':          self.company_id,
'description':      self.description,
'application':      self.application,
'app_url':          self.app_url,
'contact_name':     self.contact_name,
'contact_email':    self.contact_email}
