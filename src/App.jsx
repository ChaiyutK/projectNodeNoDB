import React, { useState, useRef } from "react";
import imgNote from "./assets/no-projects.png";
import Section from "./components/Section";
import Button from "./components/Button";
import CreateProject from "./components/CreateProject";
import ActiveProject from "./components/ActiveProject";
import Popup from "./components/Popup";

function App() {
  const taskInputRef = useRef();
  const dialog = useRef();
  const [pageActive, setPageActive] = useState(1);
  const [createProject, setCreateProject] = useState({
    Title: "",
    Description: "",
    DueDate: "",
    Task: [],
  });
  const [projectList, setProjectList] = useState([]);
  const [activeProject, setActiveProject] = useState([]);

  function handleClickButton(typeButton, title) {
    if (typeButton == "CreateProject") {
      setPageActive(2);
    } else if (typeButton == "Save") {
      if (
        createProject.Title == "" ||
        createProject.Description == "" ||
        createProject.DueDate == ""
      ) {
        handleErrorDialog();
      } else {
        setProjectList((prevProjectList) => {
          const newProjestList = [...prevProjectList, createProject];
          return newProjestList;
        });
        setCreateProject({
          Title: "",
          Description: "",
          DueDate: "",
          Task: [],
        });
        setPageActive(1);
        //console.log(projectList);
      }
    } else if (typeButton == "Cancel") {
      setPageActive(1);
    } else if (typeButton == "ProjectList") {
      setPageActive(3);
      /* const activeData = projectList.filter((project) => {
        return project.Title == title;
      }); */
      /* setActiveProject(
        <div className="flex flex-col gap-7 justify-start items-center w-full h-3/5">
          <h1>{activeData[0].Title}</h1>
          <button onClick={()=>handleDeleteButton(activeData[0].Title)}>Delete</button>
          <input ref={taskInputRef} type="text" />
          <button onClick={()=>handleCreateTask(activeData[0].Title)}>Add Task</button>
        </div>
      ); */
      setActiveProject((prev) => {
        const temp = projectList.filter((project) => {
          return project.Title == title;
        });
        return temp[0];
      });
    }
    //console.log(activeProject);
  }

  function handleChange(input, typeInput) {
    setCreateProject((prevCreateProject) => {
      return {
        ...prevCreateProject,
        [typeInput]: input,
      };
    });
    //console.log(createProject);
  }

  function handleDeleteButton(projectName) {
    setProjectList((prevProjectList) => {
      return prevProjectList.filter((project) => {
        return project.Title != projectName;
      });
    });
    setPageActive(1);
  }

  function handleCreateTask(projectName) {
    if (taskInputRef.current.value == "") {
      handleErrorDialog();
    } else {
      /* setProjectList((prevProjectList)=>{
     const project = prevProjectList.filter((acProject)=>{
      return acProject.Title == projectName;
     })
     project.Task.push(taskInputRef.current.value);
     console.log(project)
    }) */

      /* setActiveProject((prevActiveProject) => {
      const currentTasks = prevActiveProject.Task || [];
      const updatedProject = {
        ...prevActiveProject,
        Task: [...currentTasks, taskInputRef.current.value],
      };
      setProjectList((prevProjectList) =>
        prevProjectList.map((project) =>
          project.Title === activeProject.Title ? activeProject : project
        )
      );
      return updatedProject;
    }); */
      const taskValue = taskInputRef.current.value;
      setProjectList((prevProjectList) => {
        const updatedProjectList = prevProjectList.map((project) => {
          if (project.Title == projectName) {
            return {
              ...project,
              Task: [...(project.Task || []), taskValue],
            };
          }
          return project;
        });

        setActiveProject(
          updatedProjectList.find((project) => {
            return project.Title == projectName;
          })
        );

        return updatedProjectList;
      });
      taskInputRef.current.value = "";
    }
    /* const newTask = taskInputRef.current.value;

    // อัพเดต projectList และสร้าง project ที่แก้ไขแล้ว
    setProjectList((prevProjectList) => {
      const updatedList = prevProjectList.map((project) => {
        if (project.Title === projectName) {
          return {
            ...project,
            Task: [...(project.Task || []), newTask],
          };
        }
        return project;
      });
  
      // อัพเดต activeProject ให้ตรงกับ projectList ที่แก้ไขแล้ว
      const updatedActiveProject = updatedList.find(
        (project) => project.Title === projectName
      );
      setActiveProject(updatedActiveProject);
  
      return updatedList;
    }); */
  }

  function handleDeleteTask(index, projectName) {
    const updatedTask = activeProject.Task.filter((task, indexTask) => {
      return index != indexTask;
    });
    //console.log(updatedTask);
    setProjectList((prevProjectList) => {
      const updatedProjectList = prevProjectList.map((project) => {
        if (project.Title == projectName) {
          return {
            ...project,
            Task: updatedTask,
          };
        }
        return project;
      });

      setActiveProject(
        updatedProjectList.find((project) => {
          return project.Title == projectName;
        })
      );
      return updatedProjectList;
    });
  }

  function handleErrorDialog() {
    dialog.current.open();
  }

  function validData() {}

  return (
    <>
      <Popup ref={dialog} onErrorDialog={handleErrorDialog} />
      <div className="flex justify-center h-screen">
        <Section styleSection="flex justify-center items-end w-1/5">
          <div className="w-full h-[95%] bg-[#100e0c] rounded-r-xl">
            <h1 className="font-semibold mt-20 ml-5 text-2xl text-gray-200">
              YOUR PROJECTS
            </h1>
            <Button
              typeButton="CreateProject"
              onClickButton={handleClickButton}
              styleSection="w-fit mt-10 ml-5 bg-[#322e2b] text-[#989490] hover:text-white px-4 py-3 rounded-lg"
            >
              <p>+ Add Project</p>
            </Button>
            {projectList.map((val, key) => (
              <Button
                key={key}
                title={val.Title}
                typeButton="ProjectList"
                onClickButton={handleClickButton}
                styleSection="w-[80%] mt-5 ml-5 text-[#989490] hover:text-white hover:bg-[#322e2b] px-2 py-2"
              >
                <p className="flex">{val.Title}</p>
              </Button>
            ))}
          </div>
        </Section>
        <Section styleSection="flex flex-wrap justify-center items-center w-4/5">
          {pageActive == 1 && (
            <div className="flex flex-col gap-7 justify-start items-center w-full h-3/5">
              <img className="w-32" src={imgNote} alt="note picture" />
              <h1 className="font-bold text-2xl">No Project Selected</h1>
              <p>select a project or get started with a new one</p>
              <Button
                typeButton="CreateProject"
                onClickButton={handleClickButton}
                styleSection="w-fit bg-[#322e2b] text-[#989490] hover:text-white px-4 py-3 rounded-lg"
              >
                <p>Create new project</p>
              </Button>
            </div>
          )}
          {pageActive == 2 && (
            <div className="flex flex-col gap-7 justify-start items-center w-full h-3/5">
              <div className="w-[80%] flex justify-end items-center">
                <Button
                  typeButton="Cancel"
                  onClickButton={handleClickButton}
                  styleSection="w-fit mt-10 ml-5 bg-[#322e2b] text-[#989490] hover:text-white px-4 py-3 rounded-lg"
                >
                  <p>Cancel</p>
                </Button>
                <Button
                  typeButton="Save"
                  onClickButton={handleClickButton}
                  styleSection="w-fit mt-10 ml-5 bg-[#322e2b] text-[#989490] hover:text-white px-4 py-3 rounded-lg"
                >
                  <p>Save</p>
                </Button>
              </div>
              <CreateProject onCreateChange={handleChange} />
            </div>
          )}
          {pageActive == 3 && (
            <ActiveProject
              ref={taskInputRef}
              activeData={activeProject}
              onDeleteButton={handleDeleteButton}
              onCreateTask={handleCreateTask}
              onDeleteTask={handleDeleteTask}
            />
          )}
        </Section>
      </div>
    </>
  );
}

export default App;
