// Equivalent to ProjectSummary in Marioplan

import React from 'react'

const RecipeSummary = ({recipe}) => {
  return(
  <div className="md:max-w-xxs mb-4 lg:mb-0 rounded overflow-hidden shadow-lg mx-2 recipe-card">
    <img className="w-full object-fit recipe-img" src={recipe.image} alt="Seafood Risotto" height="230px"/>
    <div className="flex recipe-actions">
      <div className="flex-grow card-icons">
        <div className="inline-block p-1 ml-2">
          <img src="/img/clock.png" alt="clock" width="15px" />
        </div>
        <p className="inline-block text-xs">{recipe.cookingTimeHours}hr {recipe.cookingTimeMinutes}min</p>
      </div>
      {/* <div className="p-1">
        <img src="/img/like.png" alt="like" className="justify-end mr-2" width="14px" />
      </div> */}
      </div>
      <div className="px-2 py-4">
        <div className="text-2xl mb-1 recipe-title">{recipe.title}</div>
    
        <p className="text-sm mb-2">
          {recipe.description} 
        </p>
      
        <p className="italic text-sm">
          by {recipe.authorFirstName} {recipe.authorLastName}
        </p>
      </div>
  </div>
  )
}

export default RecipeSummary