const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarouselSchema = new Schema({
    urlImage: {
        type: String,
    },
    description: {
        type: String,
        maxlength: 35,
    },
    color: {
        type: String,
    },
    localImage: {
        type: Object
    }
});

const Carousel = mongoose.model("Carousel", CarouselSchema);

module.exports = Carousel;