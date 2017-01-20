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

          <img src='/resources/rotator/ResidenceLibrarians.jpg' />



          <img src='/resources/rotator/spotlight-201612-birds-VERT.jpg' />
          <img src='/resources/rotator/SubjectLibrarians.jpg' />
          <img src='/resources/rotator/DD_vert-EarlyCatholicAmerica.jpg' />
          <img src='/resources/rotator/North.Entrance.jpg' />
          <img src='/resources/rotator/walkthewalk.monday.vertical.png' />

        </Slider>
      </div>
    );
  }
});

export default ReactSlickDemo;
