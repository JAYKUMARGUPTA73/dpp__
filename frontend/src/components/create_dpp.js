import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';

const DppCreator = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedChapters, setSelectedChapters] = useState({});
  const [subjects, setSubjects] = useState([]);
  const [chapters, setChapters] = useState({});
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/getallsubjects');
      if (!response.ok) {
        throw new Error('Failed to fetch subjects');
      }
      const data = await response.json();
      setSubjects(data);
    } catch (error) {
      console.error('Error fetching subjects:', error);
    }
  };

  const fetchChaptersBySubject = async (subjectId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/getchapters/${subjectId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch chapters for subject ID ${subjectId}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching chapters for subject ID ${subjectId}:`, error);
      return [];
    }
  };

  const fetchQuestionsBySubjectAndChapter = async (subjectId, chapterId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/getquestions/${subjectId}/${chapterId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch questions for subject ID ${subjectId} and chapter ID ${chapterId}`);
      }
      const data = await response.json();
      console.log("data")
      console.log(data)
      return data;
    } catch (error) {
      console.error(`Error fetching questions for subject ID ${subjectId} and chapter ID ${chapterId}:`, error);
      return [];
    }
  };

  const handleSubjectSelect = async (subject) => {
    const isSubjectSelected = selectedSubjects.find(item => item._id === subject._id);
    
    let updatedSelectedSubjects = [];
    let updatedChapters = { ...chapters }; // Maintain the previously fetched chapters
  
    if (isSubjectSelected) {
      // Subject already selected, remove it
      updatedSelectedSubjects = selectedSubjects.filter(item => item._id !== subject._id);
      delete updatedChapters[subject._id]; // Remove chapters of the deselected subject
    } else {
      // Subject not selected, add it
      updatedSelectedSubjects = [...selectedSubjects, subject];
      // Fetch chapters for the newly selected subject
      const subjectChapters = await fetchChaptersBySubject(subject._id);
      updatedChapters[subject._id] = subjectChapters;
    }
  
    setSelectedSubjects(updatedSelectedSubjects);
    setChapters(updatedChapters); // Update the chapters state
  };
  

  const handleChapterSelect = async (subjectId, chapter) => {
    const updatedChapters = selectedChapters[subjectId] || [];
    const index = updatedChapters.indexOf(chapter.name);
    let updatedQuestions = [...questions]; // Copy the current questions array
  
    if (index !== -1) {
      updatedChapters.splice(index, 1);
    } else {
      updatedChapters.push(chapter.name);
    }
  
    setSelectedChapters({
      ...selectedChapters,
      [subjectId]: updatedChapters
    });
  
    // Fetch questions for the selected chapter and subject
    if (index === -1) {
      const newQuestions = await fetchQuestionsBySubjectAndChapter(subjectId, chapter._id);
      updatedQuestions = [...updatedQuestions, ...newQuestions]; // Add new questions
    } else {
      // Remove questions from the deselected chapter
      updatedQuestions = updatedQuestions.filter(question => !question.chapter.includes(chapter._id));
    }
  
    setQuestions(updatedQuestions); // Update the questions state
  };
  

  const generatePDF = () => {
    const doc = new jsPDF();
    let y = 20;
  
    selectedSubjects.forEach(subject => {
      doc.setFontSize(20);
      doc.text(subject.name, 15, y);
      y += 15;
  
      selectedChapters[subject._id]?.forEach(chapterName => {
        const chapter = chapters[subject._id]?.find(chapter => chapter.name === chapterName);
        if (chapter) {
          doc.setFontSize(16);
          doc.text(chapter.name, 20, y);
          y += 10;
  
          const filteredQuestions = questions.filter(question => {
            return question.subject.includes(subject._id) && question.chapter.includes(chapter._id);
          });
          // console.log(questions)
  
          let questionNumber = 1;
  
          filteredQuestions.forEach(question => {
            y += 6;
            doc.setFontSize(14);
            const questionTextLines = doc.splitTextToSize(`Question ${questionNumber}: ${question.question_text}`, doc.internal.pageSize.width - 30);
            questionTextLines.forEach(line => {
              if (y + 10 > doc.internal.pageSize.height) {
                doc.addPage();
                y = 10;
              }
              doc.text(line, 30, y);
              y += 6;
            });
  
            doc.setFontSize(12);
            question.options.forEach((option, index) => {
              const optionText = `${String.fromCharCode(97 + index)}. ${option}`;
              const optionLines = doc.splitTextToSize(optionText, doc.internal.pageSize.width - 35);
              optionLines.forEach(line => {
                if (y + 8 > doc.internal.pageSize.height) {
                  doc.addPage();
                  y = 10;
                }
                doc.text(line, 35, y);
                y += 5;
              });
            });
  
            y += 8;
            questionNumber++;
          });
        }
      });
    });
  
    doc.save('dpp.pdf');
  };
  
  

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">DPP Creator</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Select Subjects:</h2>
          <div className="space-y-2">
            {subjects.map(subject => (
              <label key={subject._id} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedSubjects.find(item => item._id === subject._id)}
                  onChange={() => handleSubjectSelect(subject)}
                />
                {subject.name}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Select Chapters:</h2>
          <div className="space-y-2">
            {selectedSubjects.map(subject => (
              <div key={subject._id}>
                <h3 className="text-lg font-semibold mb-2">{subject.name}</h3>
                {chapters[subject._id]?.map(chapter => (
                  <label key={chapter._id} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedChapters[subject._id]?.includes(chapter.name)}
                      onChange={() => handleChapterSelect(subject._id, chapter)}
                    />
                    {chapter.name}
                  </label>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button onClick={generatePDF} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Generate PDF
        </button>
      </div>
    </div>
  );
};

export default DppCreator;
