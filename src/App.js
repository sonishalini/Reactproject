import "./App.css"; //inject
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { userState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    let index = todos.indexOf(todo);
    todos.splice(index, 1);
  };
  //todos ko ek object through bana lege
  let todos = [
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
  ];
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
