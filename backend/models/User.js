const mongo = require('mongoose');

const UserSchema = mongo.Schema({
    firstName: String ,
    lastName: String,
    userName: String,
    password: String,
    blogPosts: [],
    numFollowers: {type: Number, default: 0}
})

module.exports = mongo.model("User", UserSchema);