import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAoyRW2LBxvcpx3venJpcO-h5O3Ucb-ans',
  authDomain: 'spnft-1dd66.firebaseapp.com',
  databaseURL: 'https://spnft-1dd66.firebaseio.com',
  projectId: 'spnft-1dd66',
  storageBucket: 'spnft-1dd66.appspot.com',
  messagingSenderId: '506654017509',
  appId: '1:506654017509:web:bf49be7b2323780704d10c',
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
