const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarouselSchema = new Schema({
    images: {
        type: String
    },
    description: {
        type: String,
        minlength: 5,
        maxlength: 10
    }
});

const Carousel = mongoose.model("Carousel", CarouselSchema);

module.exports = Carousel;