import firebase from 'firebase'

firebase.auth().onAuthStateChanged(user => {
   if (!user){ 
      console.log('No existe usuario actualmente')
      if (window.location != '/'){ window.location = '/' }
   }
})

