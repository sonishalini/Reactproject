import "./App.css"; //inject
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";

function App() {
  return (
    <>
      {/* <Header title="MyTodosList" searchBar={false} /> */}
      <Header title="MyTodosList" />
      <Todos />
      <Footer />
    </>
  );
}
export default App;
