const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectID;

mongoose.connect('mongodb://localhost/usersDB', {useNewUrlParser: true});

const Users = new Schema({
    id: ObjectID,
    name: String,
    interests: [Strings],
    email: String,
    rsvp: [String]
});

module.exports = Users;