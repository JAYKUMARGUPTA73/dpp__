
const mongoose = require("mongoose");
const Question = require("./question");

const subjectSchema = new mongoose.Schema({
    name: 
    { 
        type: String,
        required: true,

    },
    description: 
    { 
        type: String
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Questions'
    }]
    
});

const Subjects = mongoose.model("Subjects", subjectSchema);

module.exports = Subjects;
