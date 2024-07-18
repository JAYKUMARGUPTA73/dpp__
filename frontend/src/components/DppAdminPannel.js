import React, { useState } from "react";

const AddQuestionForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [topic, setTopic] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      question_text: question,
      options: options,
      topic: topic
    };
    onSubmit(newQuestion);
    // Clear form fields after submission
    setQuestion("");
    setOptions([]);
    setTopic("");
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="question" className="block font-medium">
            Question
          </label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="topic" className="block font-medium">
            Topic
          </label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block font-medium">Options</label>
          {options.map((option, index) => (
            <input
              key={index}
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          ))}
          <button
            type="button"
            onClick={handleAddOption}
            className="mt-2 text-sm text-gray-600 hover:text-gray-900"
          >
            Add Option
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Add Question
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddQuestionForm;
