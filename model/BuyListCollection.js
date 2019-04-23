const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BuyListSchema = new Schema({
    price: String,
    quantity: Number,
    cardName: String
});

var BuyList = mongoose.model("BuyList", BuyListSchema);

module.exports = BuyList;