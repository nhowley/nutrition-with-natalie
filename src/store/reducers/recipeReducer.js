const initState = {
  recipes: [
    {id: '1', title: 'Veggie lasagne', content: 'blah'},
    {id: '2', title: 'Chicken Stir Fry', content: 'blah'},
    {id: '3', title: 'Sausage and Mash', content: 'blah'},
  ]
}

const recipeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      console.log('added recipe', action.recipe);
      return state;
    case 'ADD_RECIPE_ERROR':
      console.log('add recipe error', action.err);
      return state;
      default: 
      return state;
  }
}

export default recipeReducer