import React from 'react'
import Form from './Form'
import '../../index.css';
// let small = '/img/home_head-visual_MOBILE.jpg';
// const medium = '/img/home_head-visual_cropped_2.jpg';
// const large = '/img/home_head-visual_cropped_2.jpg';
// const xlarge = '/img/home_head-visual_cropped_2.jpg';

const Macros = (props) => {
  return(
    <div>
      {/* Head visual */}
      <section>
        <div className="object-fit relative">
          <img src="/img/macros-head-visual_cropped.jpg" alt="Burger meal" className="macro-img"/>
          {/* <img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w, ${xlarge} 3200w`} alt="Kitchen Surface"/> */}
          <div className="absolute transform-translate-center w-full lg:w-3/5 p-8">
            <h1 className="text-white text-2xl lg:text-5xl 2xl:text-6xl text-center">How much do you need to eat to achieve your goal?</h1>
          </div>
        </div>
      </section>
      {/* Form */}
      <section>
        <div className="mb-32">
          <Form />
        </div>
      </section>
    </div>
  )
}




export default (Macros)
