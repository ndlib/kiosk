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
          <img src='/resources/rotator/hackathon.jpg' />
          <img src='/resources/rotator/math.tutoring.jpg' />
          <img src='/resources/rotator/rbsc.spring.2015.jpg' />
          <img src='/resources/rotator/ULRA.jpg' />
        </Slider>
      </div>
    );
  }
});

export default ReactSlickDemo;