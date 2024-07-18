const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subjects'
    }],
    img: {
        type:String
    }
});


const Chapters = mongoose.model("Chapters", chapterSchema);

module.exports = Chapters;
