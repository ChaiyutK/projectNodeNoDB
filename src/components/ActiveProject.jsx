import React from "react";
import { forwardRef } from "react";

const ActiveProject = forwardRef(function ActiveProject(
  { onDeleteButton, onCreateTask, activeData, onDeleteTask },
  ref
) {
  return (
    <div className="flex flex-col gap-7 justify-start items-center w-full h-3/5">
      <h1>{activeData.Title}</h1>
      <button onClick={() => onDeleteButton(activeData.Title)}>Delete</button>
      <input ref={ref} type="text" />
      <button onClick={() => onCreateTask(activeData.Title)}>Add Task</button>
      {activeData.Task == undefined
        ? ""
        : activeData.Task.map((task, index) => (
            <p key={index}>
              {task}
              <button className="ml-4" onClick={() => onDeleteTask(index,activeData.Title)}>
                Clear
              </button>
            </p>
          ))}
    </div>
  );
});

export default ActiveProject;
