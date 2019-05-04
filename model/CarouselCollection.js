const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarouselSchema = new Schema({
    image: {
        type: String
    },
    description: {
        type: String,
        minlength: 3,
        maxlength: 35
    }
});

const Carousel = mongoose.model("Carousel", CarouselSchema);

module.exports = Carousel;