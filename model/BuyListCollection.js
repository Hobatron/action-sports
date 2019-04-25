const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BuyListSchema = new Schema({
    price: Number,
    quantity: Number,
    cardName: String
});

var BuyList = mongoose.model("BuyList", BuyListSchema);

module.exports = BuyList;