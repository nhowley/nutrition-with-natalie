// Equivalent to ProjectList in Marioplan

import React from 'react'
import { Link } from 'react-router-dom'
import Results from './Results';

const MacroList = ({macros}) => {
  console.log(macros)
return (
  
  <div className="container flex justify-around">
    {macros && macros.map(macro => {
      return (
      <button className="eighth next button-teal hover:bg-green" href={'/macro/' + macro.id}>See my results
        <Results macro={macro} key={macro.id} />
      </button>
      )
    })}
  </div>
)
}

export default MacroList