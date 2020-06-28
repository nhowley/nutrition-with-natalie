import React from "react";

const Feature = ({image, heading, text}) => (

<div className="flex flex-col lg:flex-row items-center py-8 lg:px-20 xl:px-40">
  <div className="icon lg:w-1/5 flex justify-end">
    <img src={image} alt="alt"/>
  </div>
  <div className="ml-6 lg:w-4/5 lg:px-6 text-center lg:text-left">
    <h2 className="text-2xl mb-4 mt-6 lg:mt-0 mt-6 lg:mt-0">{heading}</h2>
    <p>{text}</p>
  </div>
</div>

);

export default Feature;