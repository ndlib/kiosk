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
      <div className='container something'>
        <iframe src='https://events.library.nd.edu/kiosk/' height='100%' width='100%' frameBorder='0' scrolling='no'></iframe>
      </div>
    );
  }
});

export default ReactSlickDemo;
