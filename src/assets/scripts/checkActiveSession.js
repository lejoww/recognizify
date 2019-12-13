import firebase from 'firebase'

export const CheckActiveSession = {
   beforeMount(){      
      firebase.auth().onAuthStateChanged(user => {
         if (!user){ 
            console.log('No existe usuario actualmente')
            if (window.location != '/'){ window.location = '/' }
         }
      })
   }
}

