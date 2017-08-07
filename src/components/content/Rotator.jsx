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
 

          <img src='/resources/rotator/WelcomeNewFaculty.V.jpg' /> 
          <img src='/resources/rotator/launch.1.png' /> 
          <img src='/resources/rotator/launch.2.png' /> 
          <img src='/resources/rotator/launch.3.png' /> 
          <img src='/resources/rotator/launch.4.png' /> 
          <img src='/resources/rotator/launch.5.png' /> 

        </Slider>
      </div>
    );
  }
});

export default ReactSlickDemo;
