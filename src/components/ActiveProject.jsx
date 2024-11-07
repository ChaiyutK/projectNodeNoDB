import React from "react";
import { forwardRef } from "react";

const ActiveProject = forwardRef(function ActiveProject(
  { onDeleteButton, onCreateTask, activeData, onDeleteTask },
  ref
) 
{
  let date = new Date(activeData.DueDate);
  date = date.toString().substring(4,15);
  
  return (
    <div className="w-[80%]">
      <div className="flex justify-between items-center w-[100%]">
        <h1 className="font-semibold text-2xl text-amber-700">{activeData.Title}</h1>
        <button onClick={() => onDeleteButton(activeData.Title)}>Delete</button>
      </div>
      <div>
        <h2>{date.toString()}</h2>
        <p>{activeData.Description}</p>
        <div className="w-[100%] border-b-2 border-black"></div>
      </div>
      <div>
        <h1 className="font-semibold text-2xl text-amber-700">Tasks</h1>
        <input className="w-[60%] mr-4 border-b-2 border-gray-200 bg-[#ada49e] focus:border-black" ref={ref} type="text" />
        <button onClick={() => onCreateTask(activeData.Title)}>Add Task</button>
      </div>
      {activeData.Task == undefined
        ? ""
        : activeData.Task.map((task, index) => (
            <p className="flex justify-between" key={index}>
              {task}
              <button
                className="ml-4"
                onClick={() => onDeleteTask(index, activeData.Title)}
              >
                Clear
              </button>
            </p>
          ))}
    </div>
  );
});

export default ActiveProject;
