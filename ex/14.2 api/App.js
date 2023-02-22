import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const planetFilms = await Promise.all(
          const planetFilms = await Promise.all(

        const response = await axios.get(
          "https://randomuser.me/api/"
        );
        setData([response.data.results[0]]);
      } catch (error) {
        console.log(error);
      }
    };
  )

    fetchData();
  }, []);

  return (
    <div>
      {data.map((person) => (
        <div key={person.name + person.last}>
                    <p>Location:  {person.gender}</p>

          {person.gender ==="male" && <img src={person.picture.medium}/>}
        <p >Name: {person.name.first} { person.name.last} </p>
        <p>Location:  {person.location.country}</p>
        <p>Email: {person.email} {person.country}</p>
        <p>Age: {person.dob.age}</p>
        <p>Phone: {person.phone}</p>
        </div>
      
      ))}
      <PersonsList></PersonsList>
    </div>
  );
}

export default App;
