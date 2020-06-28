import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

// To use on page:
// import React from 'react'
// import SimpleSlider from './Slider'

// export default function MealPlanner () {
//   return <SimpleSlider>
//     <div style={{backgroundColor: 'tomato', height: '100%'}}>Frame 1</div>
//     <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
//     <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
//   </SimpleSlider>
// }