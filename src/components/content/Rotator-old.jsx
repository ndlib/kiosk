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
 
          <img src='/resources/rotator/commencement.v.1.jpg' />
          <img src='/resources/rotator/commencement.v.2.jpg' />


        </Slider>
      </div>
    );
  }
});

export default ReactSlickDemo;
