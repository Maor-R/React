import { GrUpdate } from "react-icons/gr";
import { useState, useEffect, useRef } from "react";
import "../index.css";

import { FcApprove, FcDisapprove } from "react-icons/fc";

const Task = ({ id, subject, avatar, question, createdAt, status, updateTaskStatus, removeTask }) => {
  const [getStatus, setGetStatus] = useState(status);
  const [getId, setGetId] = useState(id);
 const answer = useRef("");
//  const  avatar = useRef("");

  console.log(question);
  return (
    <>
      {getId && (
        <article className="card">
          <h5>{id}</h5>
          <h5>{createdAt}</h5>
          <h5>{subject}</h5>
          <h5>{question}</h5>
          <h5>{avatar}</h5>
          <h5>{answer.current.value}</h5>

          <input placeholder="Answer"></input>

          <button
            className="btn btn-transparent mt"
            onClick={() => {
              if (true) {
                setGetStatus(true);
                updateTaskStatus(id);
              }
            }}
          >
            {!getStatus && <FcDisapprove />}
            {getStatus && <FcApprove />}
          </button>
          <button
            className="btn btn-transparent mt"
            onClick={() => {
              setGetId(null);
              removeTask(id);
            }}
          >
            <GrUpdate />
          </button>
        </article>
      )}
    </>
  );
};

export default Task;
