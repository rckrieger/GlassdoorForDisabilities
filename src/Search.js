import starRatings from 'star-ratings'
import StarRatingComponent from 'react-star-rating-component';

import React, { Component } from 'react';


class Search extends Component {

    constructor()
    {
      super();
      this.state = {
        activePlace: 0,
        companyArray:[]
      };
    }
    render() {


      return (
        <div className="Search">
        <StarRatingComponent
          name="rate2"
          editing={false}
          starCount={5}
          value={4.5}
        />

        </div>
      );
    }
}

export default Search;
