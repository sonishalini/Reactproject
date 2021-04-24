import React, { useState } from "react";
export function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description can't be blank!");
    }
    props.addTodo(title, desc);
  };

  return (
    <div className="container">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        {/* <form onSubmit={props.addTodo}> */}
        <div className="mb-3">
          <label htmlfor="Title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="Title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label
            htmlfor="desc"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-label"
          >
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
}
