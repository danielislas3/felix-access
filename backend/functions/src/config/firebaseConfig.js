const admin = require('firebase-admin');
const { databaseURL } = require('firebase-functions/params');

console.log('Inicializando Firebase Admin SDK', databaseURL.value());
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: databaseURL.value(),
});

module.exports = admin;
