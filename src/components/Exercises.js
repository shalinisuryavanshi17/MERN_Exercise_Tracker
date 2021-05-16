import React from "react";

import axios from "axios";
import { Link } from "react-router-dom";

export default function Exercise(props) {
    function onDelete(e) {
    axios
      .delete("http://localhost:5000/exercises/" + props.ex._id)
      .then((res) => {
        console.log(res.data);
        window.location("/");
      })
      .catch((err) => console.log("error " + err));
  }

  return (
    <tr>
      <td>{props.ex.username}</td>
      <td>{props.ex.description}</td>
      <td>{props.ex.duration}</td>
      <td>{props.ex.date.substring(0, 10)}</td>
      <td>
        <Link
          className="btn btn-primary"
          to={"/edit/"+props.ex._id}
         
          style={{margin:"0.5rem"}}
        >
          Edit
        </Link>
        <button
          className="btn btn-danger"
          onClick={(e) => {
            onDelete(e);
          }}
          style={{margin:"0.5rem"}}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
