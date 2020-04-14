import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
	apiKey: 'AIzaSyAe_vdoN9VbNlhuCqxf41LFXG4dX_Q1yHI',
	authDomain: 'auth-train-9eea8.firebaseapp.com',
	databaseURL: 'https://auth-train-9eea8.firebaseio.com',
	projectId: 'auth-train-9eea8',
	storageBucket: 'auth-train-9eea8.appspot.com',
	messagingSenderId: '932279961269',
	appId: '1:932279961269:web:801910933183ff23a3e0fc'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
