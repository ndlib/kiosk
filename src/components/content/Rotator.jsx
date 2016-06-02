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
          <img src='/resources/rotator/reunion.1.jpg' />
          <img src='/resources/rotator/dd_vert-Vaticana.jpg' />

          <img src='/resources/rotator/reunion.2.jpg' />
           <img src='/resources/rotator/easter.jpg' />

        </Slider>
      </div>
    );
  }
});

export default ReactSlickDemo;