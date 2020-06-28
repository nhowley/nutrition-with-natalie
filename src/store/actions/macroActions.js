export const addMacros = (macro) =>{
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to database
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;
    firestore.collection('users').doc(user.uid).update({
        ...macro,
        user: user.uid
      }).then(()=>{
    dispatch({type: 'ADD_MACRO', macro});
  }).catch((err) => {
    dispatch({type: 'ADD_MACRO_ERROR', err});
  })
}
}
