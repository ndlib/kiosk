import React from 'react';
import Slider from 'react-slick';

var ReactSlickDemo = React.createClass({
  render: function() {
    var settings = {
      dots: false,
      arrows: false,
      autoplay:true,
      autoplaySpeed: 10000,
      fade: true,
    }
    return (
      <div className='container'>
        <Slider {...settings}>
          <img src='http://placekitten.com/g/400/200' />
          <img src='http://placekitten.com/g/400/200' />
          <img src='http://placekitten.com/g/400/200' />
          <img src='http://placekitten.com/g/400/200' />
        </Slider>
      </div>
    );
  }
});

export default ReactSlickDemo;