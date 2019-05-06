const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarouselSchema = new Schema({
    image: {
        type: String,
    },
    description: {
        type: String,
        maxlength: 35,
    },
    color: {
        type: String,
    },
});

const Carousel = mongoose.model("Carousel", CarouselSchema);

module.exports = Carousel;