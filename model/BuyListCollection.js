const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BuyListSchema = new Schema({
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    cardName: {
        type: String,
        required: true
    }
});

var BuyList = mongoose.model("BuyList", BuyListSchema);

module.exports = BuyList;