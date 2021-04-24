import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className=" my-3">Todos List </h3>
      {/* todoItem banaya hai ham ise for loop ki help se manage kare */}
      {/* Note: for beautifying JSON object, add below css as well
          body { white-space: pre; } */}
      {/* {JSON.stringify(props.todos, null, "\t")} */}

      {props.todos.length === 0
        ? "No Todos to Display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
