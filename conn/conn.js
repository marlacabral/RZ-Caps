const mongoose = require('mongoose');

const Conn = () => {
    mongoose.connect('mongodb://localhost:27017/caps', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('MongoDB connected');
    }).catch((err) => {
        console.error(err)
    })
}

module.exports = Conn;