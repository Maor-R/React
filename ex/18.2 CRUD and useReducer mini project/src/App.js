import React, {  useEffect, useReducer } from "react";
import Main from "./components/Main.component";
import ToDoList from "./components/ToDoList.component";
import { removeItem, getItem, setItem } from "./services/localStorageService";

const ls = getItem("toDoList");
if (!ls) {
  setItem("toDoList", []);
}

const currentId = getItem("currentId");
if (!currentId) {
  setItem("currentId", 1);
}

const ACTIONS = {
  ID: "ID",
  ADD_TO_TO_DO_LIST: "ADD_TO_TO_DO_LIST",
  TO_DO_LIST: "TO_DO_LIST",
  SIMULATION_UPDATE: "SIMULATION_UPDATE",
};

const initialState = {
  toDoList: ls,
  createId: currentId,
  simulationUpdate: 0,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case ACTIONS.ID:
      return { ...state, createId: state.createId + 1 };
      case ACTIONS.ADD_TO_TO_DO_LIST: 
        const { status, task } = payload;
        return {
          ...state,
          toDoList: [
          ...state.toDoList,
          { id: state.createId, task: task, status: status },
        ],
      };

    case ACTIONS.SIMULATION_UPDATE:
      return { ...state, simulationUpdate: state.simulationUpdate + 1 };
      default:
        return state;
      }
    };
function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const addTodo = (taskToAdd) => {
    dispatch({
      type: ACTIONS.ADD_TO_TO_DO_LIST,
      payload: { task: taskToAdd, status: false },
    });
    dispatch({ type: ACTIONS.ID });
    setItem("currentId", state.createId);
  };

  useEffect(() => {
    removeItem("toDoList");
    setItem("toDoList", state.toDoList);
  }, [state.simulationUpdate]);

  const removeTask = (taskId) => {
    const index = state.toDoList.findIndex((task) => task.id === taskId);
    state.toDoList.splice(index, 1);
    // dispatch({type: ACTIONS.TO_DO_LIST, payload:{  toDoList: state.toDoList }});
    dispatch({ type: ACTIONS.SIMULATION_UPDATE });
  };

  const updateTaskStatus = (taskId) => {
    const index = state.toDoList.findIndex((task) => task.id === taskId);
    state.toDoList[index].status = true;
    // dispatch({type: ACTIONS.TO_DO_LIST, payload:{  toDoList: state.toDoList }});

    dispatch({ type: ACTIONS.SIMULATION_UPDATE });
  };

  return (
    <>
      <Main addTodo={addTodo}></Main>
      <ToDoList
        tasks={state.toDoList}
        removeTask={removeTask}
        updateTaskStatus={updateTaskStatus}
      ></ToDoList>
    </>
  );
}

export default App;
