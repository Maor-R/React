import Task from "./Task.component";

const ToDoList = ({ tasks, removeTask,updateTaskStatus }) => {
  return (
    <section className="container">
      {tasks.map((task) => {
        return <Task key={task.id} id={task.id} subject={task.subject} 
        question={task.question} avatar={task.avatar}  createdAt={task.createdAt}  removeTask={removeTask} 
        updateTaskStatus={updateTaskStatus} />;
      })}
    </section>
  );
};

export default ToDoList;
