import { React, useState } from "react";
import axios from "axios";
import Exercise from "./Exercises";
export default function ListExcercises() {
  const [exercises, setexercises] = useState([]);
  axios
    .get("http://localhost:5000/exercises")
    .then((res) => setexercises(res.data))
    .catch((err) => console.log("error is " + err));
  return (
    <div className="container">
      <table className="table table-light" style={{margin:"4rem"}}>
        <thead className="">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((ex) => {
            return <Exercise key={ex.id} ex={ex} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
