const functions = require('firebase-functions');
const admin = require('firebase-admin');
const uuidv1 = require('uuid').v1;

exports.createProject = functions.https.onCall((req, contx) => {
    const uid = uuidv1();
    return admin.firestore()
    .collection('projects')
    .doc(uid)
    .set({
        name: req.largeName,
        shortName: req.shortName,
        description: req.description,
        admin: [ contx.auth.uid ],
        creation: admin.firestore.Timestamp.fromDate(new Date()),
        adminEmail: contx.auth.token.email
    })
    .then(() => {
        admin.firestore()
        .collection('users')
        .doc(contx.auth.uid)
        .get()
        .then(userdata => {
            admin.firestore()
            .collection('projects')
            .doc(uid)
            .collection('members')
            .doc(contx.auth.uid)
            .set({
                name: userdata.data()['name'],
                user: userdata.data()['user'],
                member: true,
                role: ''
            });
        });
        return { status: 'ok' };
    })
    .catch(() => {
        throw new functions.https.HttpsError('invalid-error', 'Unable to add project to database.');
    });
})