
import firebase from 'firebase'

// production
var firebaseConfig = {
   apiKey: "AIzaSyALNLYPCNGY3d1RTTOcENFkVz4dEkLw43I",
   authDomain: "recognizify-app.firebaseapp.com",
   databaseURL: "https://recognizify-app.firebaseio.com",
   projectId: "recognizify-app",
   storageBucket: "recognizify-app.appspot.com",
   messagingSenderId: "260792610452",
   appId: "1:260792610452:web:504fde4858c35f0c"
};

firebase.initializeApp(firebaseConfig);

// development
// var firebaseConfig = {
//    apiKey: "AIzaSyA8O-VBTuG46Vqa24ZWLxtjnh7MByKd7YQ",
//    authDomain: "recognizify-dev.firebaseapp.com",
//    databaseURL: "https://recognizify-dev.firebaseio.com",
//    projectId: "recognizify-dev",
//    storageBucket: "recognizify-dev.appspot.com",
//    messagingSenderId: "182637661762",
//    appId: "1:182637661762:web:2a4c9177980927659667db"
//  };
 
//  firebase.initializeApp(firebaseConfig);
