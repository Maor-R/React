import { useState } from "react";

import { PAGES } from "../constants";

import Wrapper from "../styles/styled/Admin.styled";
import { UsersList } from "../components";

import { users } from "../data";

const userData = JSON.parse(localStorage.getItem("userData"));
const partiesVotesAmount = JSON.parse(
  localStorage.getItem("partiesVotesAmount")
);
const Admin = ({ setPage }) => {
  let data = [];
  for (let i = 0; i < users.length; i++) {
    const rand = Math.random() > 0.5 ? true : false;
    data.push({ name: users[i].name, id: users[i].id, didVote: rand });
  }
  const [usersData, setUsersData] = useState(data);
  const [sum, setSum] = useState(
    usersData.reduce((sum, user) => {
      if (user.didVote) {
        sum++;
      }
      return sum;
    }, 0)
  );

  const logout = () => {
    setPage(PAGES[0]);
    localStorage.removeItem("userData");
  };

  const updateUserVote = (id) => {
    let i = 0;
    let stopLoop = false;
    while (i < usersData.length && !stopLoop) {
      if (usersData[i].id === id) {
        stopLoop = true;
      } else {
        i++;
      }
    }
    usersData[i].didVote = false;
    setSum((prevSum) => prevSum - 1);
    setUsersData(usersData);
  };

  return (
    <Wrapper>
      <main className="page">
        <div className="data-msg">
          Hello, {userData.name}
          <button className="logout-btn btn" onClick={logout}>
            Logout
          </button>
        </div>
        <div className="dashboard">
          <UsersList users={usersData} updateUserVote={updateUserVote} />
        </div>
        <div className="data-msg center">Total voted: {sum}</div>
      </main>
    </Wrapper>
  );
};

export default Admin;
