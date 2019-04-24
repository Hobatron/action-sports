const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CalendarSchema = new Schema({
    eventTitle: {
        type: String,
        required: true
    },
    startDate: { 
        type: Date,
        required: true
    },
    endDate: { 
        type: Date,
        default: this.startDate
    },
    startTime: { 
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: String,
    repeats: Boolean
});

var Calendar = mongoose.model("Calendar", CalendarSchema);


module.exports = Calendar;