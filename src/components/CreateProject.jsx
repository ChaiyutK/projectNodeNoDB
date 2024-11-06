import React from "react";

export default function CreateProject({onCreateChange}) {
  return (
    <div className="w-[80%]">
      <h2>TITLE</h2>
      <input onChange={(event)=>onCreateChange(event.target.value,"Title")} className="w-[80%]" type="text" />
      <h2>DESCRIPTION</h2>
      <input onChange={(event)=>onCreateChange(event.target.value,"Description")} className="w-[80%]" type="text" />
      <h2>DUE DATE</h2>
      <input onChange={(event)=>onCreateChange(event.target.value,"DueDate")} className="w-[80%]" type="date" />
    </div>
  );
}
