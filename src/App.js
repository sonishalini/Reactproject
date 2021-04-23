import "./App.css"; //inject
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";

function App() {
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
      title: "Go to the offic",
      desc: "You need to go to the market to get this job done",
    },
  ];
  return (
    <>
      {/* <Header title="MyTodosList" searchBar={false} /> */}
      <Header title="MyTodosList" />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}
export default App;
