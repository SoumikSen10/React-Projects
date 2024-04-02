import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-slate-400">
        <h1 className=" font-bold mb-8 mt-2 text-center text-3xl bg-blue-600 py-3 text-white">
          Todo List using Redux Toolkit
        </h1>
        <div className="mb-4">
          {/* Todo form goes here */}
          <AddTodo />
        </div>
        <Todos />
      </div>
    </>
  );
}

export default App;
