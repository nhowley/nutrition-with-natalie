import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer,
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(fbConfig),
  reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
  serviceWorker.unregister();
})






// //CODE TO HIDE FILE UPLOAD BUTTON
// const uploadButton = document.querySelector('.browse-btn');
// const fileInfo = document.querySelector('.file-info');
// const realInput = document.querySelector('.real-input');

// uploadButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   realInput.click();
// });

// realInput.addEventListener('change', () => {
//   const name = realInput.value.split(/\\|\//).pop();
//   const truncated = name.length > 20 
//     ? name.substr(name.length - 20) 
//     : name;
  
//   fileInfo.textContent = truncated;
// });
