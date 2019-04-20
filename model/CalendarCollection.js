const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectID;

mongoose.connect('mongodb://localhost/calendarDB', {useNewUrlParser: true});

const Calendar = new Schema({
    id: ObjectID,
    eventTitle: String,
    startDate: Date,
    endDate: Date,
    startTime: Date,
    endTime: Date,
    Description: String,
    location: String
});

module.exports = Calendar;