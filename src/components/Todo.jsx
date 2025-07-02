import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";

const todoKey = "reactTodo";

const Todo = () => {
  const [task, setTask] = useState(() => {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) {
      return [];
    }
    return JSON.parse(rawTodos);
  });

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    //To check if the input field is empty or not
    if (!content) return;

    // To check if the data is already exist or not
    const ifTodoContentMatched = task.find((task) => task.content == content);

    if (ifTodoContentMatched) {
      toast.warn("Task already exists!", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
      return;
    }

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  // add data to localStorage
  localStorage.setItem(todoKey, JSON.stringify(task));

  const onDeleteHandler = (data) => {
    const filteredTasks = task.filter((curTask) => curTask.content !== data);
    setTask(filteredTasks);
  };

  const onClickClearAllHandler = () => {
    setTask([]);
  };

  // todo handleCheckTodo function
  const handleCheckTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-slate-900 px-4 py-10">
      <ToastContainer />
      <header className="flex justify-center mb-8">
        <h1 className="text-white text-4xl font-bold">Todo List</h1>
        <h1>gaurav</h1>
      </header>

      <TodoDate />
      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="mt-8 w-full max-w-md mx-auto">
        <ul>
          {task.map((curItem) => (
            <TodoList
              key={curItem.id}
              data={curItem.content}
              checked={curItem.checked}
              onDeleteHandler={onDeleteHandler}
              onHandleCheckTodo={handleCheckTodo}
            />
          ))}
        </ul>

        {task.length > 0 && (
          <section className="mt-4 flex justify-center">
            <button
              onClick={onClickClearAllHandler}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300"
            >
              Clear All
            </button>
          </section>
        )}
      </section>
    </section>
  );
};

export default Todo;
