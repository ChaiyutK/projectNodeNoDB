import React from "react";

export default function CreateProject({onCreateChange}) {
  return (
    <div className="w-[80%] align-middle">
      <h2 className="font-medium text-[#636262]">TITLE</h2>
      <input onChange={(event)=>onCreateChange(event.target.value,"Title")} className="w-[100%] border-b-2 border-gray-200 bg-[#ada49e] focus:border-black" type="text" />
      <h2 className="font-medium text-[#636262]">DESCRIPTION</h2>
      <textarea onChange={(event)=>onCreateChange(event.target.value,"Description")} className="w-[100%] border-b-2 border-gray-200 bg-[#ada49e] focus:border-black" />
      <h2 className="font-medium text-[#636262]">DUE DATE</h2>
      <input onChange={(event)=>onCreateChange(event.target.value,"DueDate")} className="w-[100%] border-b-2 border-gray-200 bg-[#ada49e] focus:border-black" type="date" />
    </div>
  );
}
