import Vue from 'vue';
import firebase from 'firebase';

export const CheckEmailVerification = {
    created: function() {
        this.getCurrentUser()
    },
    methods: {
        getCurrentUser: function(){
            firebase.auth().onAuthStateChanged(user => {
                this.checkEmailState(user);
            })
        },
        checkEmailState: function(user){
            if (user.emailVerified == false) {
                window.location = '/verify';
            }
        }
    }
}