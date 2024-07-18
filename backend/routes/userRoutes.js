const express = require('express');
const userRoutes = express.Router();
const Subject = require('../models/subject');
const Chapter = require('../models/chapters');
const Question = require('../models/question');

userRoutes.get('/getallsubjects', async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.json(subjects);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

userRoutes.get('/getchapters/:subjectId', async (req, res) => {
    try {
        const subjectId = req.params.subjectId;
        console.log(subjectId)
        const chapters = await Chapter.find({ subject: subjectId }).populate('subject');
        console.log(chapters)
        res.json(chapters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});


userRoutes.get('/getallquestions', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

userRoutes.get('/getquestions/:subjectId/:chapterId', async (req, res) => {
    const { subjectId, chapterId } = req.params;
    console.log("hey"+subjectId+","+chapterId)
    try {
      // Fetch questions that match the provided subject ID and chapter ID
      const questions = await Question.find({
        subject: subjectId,
        chapter: chapterId
      });
      console.log(questions)
      res.json(questions);
    } catch (error) {
      console.error('Error fetching questions:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


module.exports = userRoutes;
