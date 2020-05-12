const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.getUser = functions.https.onCall((req, contx) => {
    return admin.firestore()
    .collection('users')
    .doc(req.uid)
    .get()
    .then(snap => {
        return { user: snap.data() };
    })
    .catch((err) => {
        console.log(err)
        // throw new functions.https.HttpsError('internal', 'Unable to get user data from database');
    })
})