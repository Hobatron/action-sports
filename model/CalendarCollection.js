const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CalendarSchema = new Schema({
    eventTitle: {
        type: String,
        required: true
    },
    startDate: {
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
    repeat: {
        type: Boolean,
        default: false
    }
});

const Calendar = mongoose.model("Calendar", CalendarSchema);


module.exports = Calendar;