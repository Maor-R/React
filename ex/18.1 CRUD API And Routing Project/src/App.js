import React, { useState, useEffect } from "react";
import Main from "./components/Main.component";
import ToDoList from "./components/ToDoList.component";
import { removeItem, getItem, setItem } from "./services/localStorageService";
import api from "./api/api";
const ls = getItem("toDoList");
if (!ls) {
  setItem("toDoList", []);
}

const currentId = getItem("currentId");
if (!currentId) {
  setItem("currentId", 102);
}

function App() {
  const [toDoList, setToDoList] = useState(ls);
  const [createId, setCreateId] = useState(currentId);
  const [simulationUpdate, setSimulationUpdate] = useState(0);

  const addTodo = ( subject, question, avatar, createdAt) => {
    setToDoList([
      ...toDoList,
      { id: createId, subject:subject, question:question, avatar: avatar, createdAt: createdAt, status:false, answer:"" },
    ]);

  
    setCreateId((prevId) => prevId + 1);
    setItem("currentId", createId);
    //
    const fetchData = async () => {
      try {
        const response = await api.get(
          "/questions",

          {
            transformResponse: [
              (data) => {
                // Parse the response data as JSON
                const parsedData = JSON.parse(data);

                // If the response contains an "error" property, throw an error
                if (parsedData.error) {
                  throw new Error(parsedData.error);
                }

                // Normalize the response data to a consistent format
                return parsedData.map((question) => ({
                  createdAt: question.createdAt,
                  id: question.id,
                  avatar: question.avatar,
                  subject: question.subject,
                  question: question.question,
                  status:false
                }));
              },
            ],
          }
        );
        console.log(response.data);
        setToDoList(response.data)
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  };

  useEffect(() => {
    removeItem("toDoList");
    setItem("toDoList", toDoList);
  }, [simulationUpdate]);

  const removeTask = (taskId) => {
    const index = toDoList.findIndex((task) => task.id === taskId);
    toDoList.splice(index, 1);
    setToDoList(toDoList);
    setSimulationUpdate((prevVal) => prevVal + 1);
  };

  const updateTaskStatus = (taskId) => {
    const index = toDoList.findIndex((task) => task.id === taskId);
    toDoList[index].status = true;
    setToDoList(toDoList);
    setSimulationUpdate((prevVal) => prevVal + 1);
  };

  return (
    <>
      <Main addTodo={addTodo}></Main>
      <ToDoList
        tasks={toDoList}
        removeTask={removeTask}
        updateTaskStatus={updateTaskStatus}
      ></ToDoList>
    </>
  );
}

export default App;
