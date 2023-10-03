

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    user : {
        type: String,
        required: true,
        unique: true
    },
    pass:{ 
        type: String,
        required: true,
        unique: true
    },
});
const userModel = mongoose.model('usuarios', userSchema);

module.exports = userModel;