import {  useRef } from "react";

function Main({addTodo}) {
    // const [task, setTask] = useState("");
    const  subject = useRef("");
    const  question = useRef("");
    const  avatar = useRef("");

    // useEffect(() => {
        
    //     return () => {
    //         cleanup
    //     };
    // }, [task.current]);

    return (
      <div className="Main" >
        <h1>TODO's</h1>
        <h2>Local Storage CRUD app</h2>
        <h3>CRUD - Create read Update Delete</h3>
        <label>Add todo  </label>
        <input ref={subject} id="subject" type="text"></input>
        <input ref={question} id="question" type="text"></input>
        <input ref={avatar} id="avatar" type="text"></input>

        <button onClick={()=>{addTodo(subject.current.value, question.current.value,
           avatar.current.value, Date.now())}}>Add</button>
      </div>
    );
  }
  
  export default Main;