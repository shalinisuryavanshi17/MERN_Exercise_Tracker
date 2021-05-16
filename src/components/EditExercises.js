import { React, useState } from "react";
import axios from "axios";

export default function EditExcercises(props) {
  const [username, setusername] = useState("");
  const [desc, setdesc] = useState("");
  const [duration, setduration] = useState("");
  const [date, setdate] = useState("");

  function onUsernameChange(e) {
    const uname = e.target.value;
    setusername(uname);
  }
  function onDescChange(e) {
    const desc = e.target.value;
    setdesc(desc);
  }
  function onDurationChange(e) {
    const duration = e.target.value;
    setduration(duration);
  }
  function onDateChange(e) {
    const date = e.target.value;
    setdate(date);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log("the prop is " + props.match.params.id);
    axios
      .post("http://localhost:5000/exercises/update/" + props.match.params.id, {
        username: username,
        description: desc,
        duration: duration,
        date: date,
      })
      .then((res) => {
        console.log(res.data);
        window.location("/");
      })
      .catch((err) => console.log("err!!!" + err));
      setusername('')
      setdesc('')
      setduration('')
      setdate('')
  }

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <div className="form-group" style={{ margin: "2rem" }}>
          <h2>Edit Exercise!</h2>
          <label>Username</label>
          <input
            type="text"
            value={username}
            className="form-control"
            onChange={(e) => {
              onUsernameChange(e);
            }}
            required
          />
          <label>Description</label>
          <input
            type="text"
            value={desc}
            className="form-control"
            onChange={(e) => {
              onDescChange(e);
            }}
            required
          />
          <label>Duration(in minutes)</label>
          <input
            type="text"
            value={duration}
            className="form-control"
            onChange={(e) => {
              onDurationChange(e);
            }}
            required
          />
          <label>Date</label>
          <input
            type="date"
            value={date}
            className="form-control"
            onChange={(e) => {
              onDateChange(e);
            }}
            required
          />
          <button className="btn btn-primary" style={{ marginTop: "1rem" }} onClick={e=>onSubmit(e)}>
            Edit Excercise!
          </button>
        </div>
      </form>
    </div>
  );
}
