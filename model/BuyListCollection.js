const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectID;

mongoose.connect('mongodb://localhost/buyListDB', {useNewUrlParser: true});

const BuyList = new Schema({
    id: ObjectID,
    price: String,
    quantity: Number,
    cardName: String
});

const BuyList = mongoose.model("BuyList", Schema);
module.exports = BuyList;