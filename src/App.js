import "./App.css"; //inject
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);

    // Deleting this way in react does nott work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  //todos ko ek object through bana lege
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the market to get this job done",
    },
    {
      sno: 3,
      title: "Go to the office",
      desc: "You need to go to the market to get this job done",
    },
  ]);
  return (
    <>
      {/* <Header title="MyTodosList" searchBar={false} /> */}
      <Header title="MyTodosList" />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}
export default App;
