import authReducer from './authReducer'
import recipeReducer from './recipeReducer'
import macroReducer from './macroReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  recipe: recipeReducer,
  macro: macroReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer