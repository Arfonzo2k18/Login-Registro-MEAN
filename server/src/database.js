const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/app-mean', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('Base de datos funcionando.'))
    .catch(err => console.error(err));

module.exports = mongoose;