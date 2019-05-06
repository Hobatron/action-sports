const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CalendarSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        default: 0
    },
    eventType: {
        type: String,
    },
    repeat: {
        type: Boolean,
        default: false
    },
});

const Calendar = mongoose.model("Calendar", CalendarSchema);


module.exports = Calendar;