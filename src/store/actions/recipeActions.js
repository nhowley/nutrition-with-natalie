export const addRecipe = (recipe) =>{
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('recipes').add({
      ...recipe, 
      authorFirstName: 'Natalie',
      authorLastName: 'Howley',
      authorId: 1,
      createdAt: new Date()
    }).then(() => {
      dispatch({type: 'ADD_RECIPE', recipe});
    }).catch((err) => {
      dispatch({type: 'ADD_RECIPE_ERROR', err});
    })
  }
}