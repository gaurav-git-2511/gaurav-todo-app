import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({ data, checked, onDeleteHandler,onHandleCheckTodo }) => {
  return (
    <li className="flex justify-between items-center bg-white text-gray-800 px-6 py-3 rounded-full shadow-md mb-4 transition-shadow duration-300">
      <span className={`text-lg font-medium ${checked ? "line-through decoration-red-500" : "no-underline"}`}>{data}</span>
      <div className="flex items-center gap-3">

        <button onClick={()=>onHandleCheckTodo(data)}>
          <MdCheck className="text-green-900 bg-green-500 rounded-full p-1 hover:text-green-700" size={30}/>
        </button>
        
        <button
          className="text-red-500 bg-red-200 rounded-full p-1 hover:text-red-700 transition-colors duration-200"
          aria-label="Delete Task"
          onClick={() => onDeleteHandler(data)}
        >
          <MdDeleteForever size={27} />
        </button>
      </div>
    </li>
  );
};

export default TodoList;
