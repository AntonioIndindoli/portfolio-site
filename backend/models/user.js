const mongoose = require('mongoose');

const Schema = mongoose.Schema; let userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    bio: {
        type: String
    },
    img: {
        data: Buffer,
        type: String
    }
}, {
    timestamps: true,
    collection: 'users'
})

module.exports = mongoose.model('User', userSchema);