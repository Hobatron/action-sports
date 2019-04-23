const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    interests: [String],
    email: {
        type: String,
        required: true
    },
    rsvp: [String]
});

var Users = mongoose.model("Users", UsersSchema);

module.exports = Users;