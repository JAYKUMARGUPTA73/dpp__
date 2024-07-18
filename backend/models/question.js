const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    question_text: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    question_image:{
        type:String,
        default:""
    },
    subject: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subjects'
    }],
    chapter: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapters'
    }]
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
