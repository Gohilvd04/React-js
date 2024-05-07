import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = () => {};
  const handleDelete = () => {};

  const handleAdd = () => {
    setTodos([...todos, { todo, isCompleted: false }]);
    setTodo("");
  };
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>

          <input
            type="text"
            value={todo}
            className="w-1/2 p-3 rounded-md font-medium "
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="bg-violet-700 hover:bg-violet-900 p-3 text-sm font-bold text-white rounded-md mx-2"
          >
            Add
          </button>
        </div>

        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          {todos.map((item, index) => {
            return (
              <div className="todo flex " key={index}>
                <div className="text w-1/2 my-2 bg-violet-300 p-3 rounded-md">
                  {item.todo}
                </div>
                <div className="buttons my-4">
                  <button
                    onClick={handleEdit}
                    className="bg-violet-700 hover:bg-violet-900 p-3 text-sm font-bold text-white rounded-md mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    className="bg-violet-700 hover:bg-violet-900 p-3 text-sm font-bold text-white rounded-md mx-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
