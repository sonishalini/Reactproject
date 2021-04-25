import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "100vh",
    margin: "40px auto",
  };
  return (
    <div className="container " style={myStyle}>
      <h3 className=" my-3">Todos List </h3>
      {/* todoItem banaya hai ham ise for loop ki help se manage kare */}
      {/* Note: for beautifying JSON object, add below css as well
          body { white-space: pre; } */}
      {JSON.stringify(props.todos, null, "\t")} ---- {props.todos.length}
      {props.todos.length === 0
        ? "No Todos to Display"
        : props.todos.map((todo) => {
            console.log(todo.sno);
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
