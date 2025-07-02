import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({id: value, content: value, checked: false})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue({id: '', content: '', checked: false}); // Clear input after adding
  };

  return (
    <section>
      <form
        className="w-full max-w-md mx-auto flex rounded-full overflow-hidden bg-white shadow-lg"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          autoComplete="off"
          placeholder="Enter your task..."
          className="flex-grow px-4 py-2 text-gray-800 focus:outline-none"
          value={inputValue.content}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-yellow-600 text-white px-6 py-2 text-sm font-semibold transition-colors duration-300"
        >
          Add Task
        </button>
      </form>
    </section>
  );
};

export default TodoForm;
