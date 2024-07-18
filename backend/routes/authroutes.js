const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
const csv = require('csv-parser');
const authRoutes = express.Router();
const Chapters = require('../models/chapters');
const Subjects = require('../models/subject');
const Question = require('../models/question');

authRoutes.post('/read-csv', upload.single('csv'), async (req, res) => {
  try {
      if (!req.file) {
          return res.status(400).json({ error: 'No file uploaded' });
      }

      const csvPath = req.file.path;
      const questions = [];

      // Read CSV file
      const csvData = [];
      fs.createReadStream(csvPath)
          .pipe(csv())
          .on('data', (row) => csvData.push(row))
          .on('end', async () => {
              console.log(`Processed ${csvData.length} rows from CSV`);

              // Fetch all subjects and chapters from the database
              const subjects = await Subjects.find({});
              const chapters = await Chapters.find({});

              for (const row of csvData) {
                  const options = [row.optiona, row.optionb, row.optionc, row.optiond];

                  // Find the subject ObjectId from the database based on subject name
                  const subject = subjects.find(s => s.name === row.subject);
                  if (!subject) {
                      console.error(`Subject not found: ${row.subject}`);
                      continue;
                  }

                  // Find the chapter ObjectId from the database based on chapter name
                  const chapter = chapters.find(c => c.name === row.chapter);
                  if (!chapter) {
                      console.error(`Chapter not found: ${row.chapter}`);
                      continue;
                  }

                  // Create and push the question object
                  const question = {
                      question_text: row.Questions,
                      options,
                      subject: subject._id,
                      chapter: chapter._id
                  };
                  questions.push(question);
                  console.log('Added question:', question);
              }

              // Add all questions to the database
              const addedQuestions = await Question.insertMany(questions);
              console.log(`Added ${addedQuestions.length} questions to the database`);

              res.json(addedQuestions);
          })
          .on('error', (error) => {
              console.error('Error reading CSV:', error);
              res.status(500).json({ error: 'Failed to read CSV' });
          });
  } catch (error) {
      console.error('Error processing CSV:', error);
      res.status(500).json({ error: 'Failed to process CSV' });
  }
});






authRoutes.post('/addsubjects', async (req, res) => {
    const { name, description, subject, chapter } = req.body;

    try {
        const newSubject = new Subjects({
            name: name,
            description: description,
            chapter: chapter,
            subject: subject
        });

        const savedSubject = await newSubject.save();

        res.status(201).json(savedSubject);
    } catch (error) {
        console.error("Error adding subject:", error);
        res.status(500).json({ error: "Failed to add subject" });
    }
});

authRoutes.post('/addchapters', async (req, res) => {
    const { name, subject, img } = req.body;

    try {
        const newChapter = new Chapters({
            name: name,
            subject: subject,
            img: img
        });

        const savedChapter = await newChapter.save();

        res.status(201).json(savedChapter);
    } catch (error) {
        console.error("Error adding chapter:", error);
        res.status(500).json({ error: "Failed to add chapter" });
    }
});

authRoutes.post('/addquestions', async (req, res) => {
    const { question_text, options, subject, chapter } = req.body;

    try {
        const newQuestion = new Question({
            question_text: question_text,
            options: options,
            subject,
            chapter
        });

        const savedQuestion = await newQuestion.save();

        res.status(201).json(savedQuestion);
    } catch (error) {
        console.error("Error adding question:", error);
        res.status(500).json({ error: "Failed to add question" });
    }
});

module.exports = authRoutes;
