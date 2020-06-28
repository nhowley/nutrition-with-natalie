const initState = {
  macros: [
    {id: '1', title: 'Veggie lasagne', content: 'blah'},
    {id: '2', title: 'Chicken Stir Fry', content: 'blah'},
    {id: '3', title: 'Sausage and Mash', content: 'blah'},
  ]
}

const macroReducer = (state= initState, action) => {
  switch (action.type) {
    case 'ADD_MACRO':
      console.log('added macro', action.macro);
      return state;
    case 'ADD_MACRO_ERROR':
      console.log('add macro error', action.err);
      return state;
      default: 
      return state;
  }
}

export default macroReducer