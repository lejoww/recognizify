var Mongoose = require('mongoose');

var uri = "mongodb+srv://recognizifyAdmin:<password>@users-ugsck.mongodb.net/test?retryWrites=true&w=majority" 
Mongoose.connect(uri)
.then(() => console.log('Funciona'))
.catch(err => console.error(err))