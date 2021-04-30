import { useState, useEffect } from "react";

import Forms from "./components/Forms";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("todas");
  const [filterTodo, setFilterTodo] = useState([]);

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    filterHandler();
    savedLocal();
  }, [todos, status]);

  const filterHandler = () => {
    if (status === "completadas") {
      setFilterTodo(todos.filter((todo) => todo.completed === true));
    } else if (status === "incompletas") {
      setFilterTodo(todos.filter((todo) => todo.completed === false));
    } else if (status === "todas") {
      setFilterTodo(todos);
    }
  };
 /*  const uploadTodo = () => {
    setTodos(todos.filter((todo) => todo.id === ))
  } */
  const savedLocal = () => {  
      localStorage.setItem('todos', JSON.stringify(todos));  
  };
  const getLocal = () => {
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let localTodos = JSON.parse(localStorage.getItem('todos'))
      setTodos(localTodos);
    }
  };
  return (
    <div className="App">
      <h1>Lista de Tareas</h1>

      <Forms
        inputText={inputText}
        setinputText={setinputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        setFilterTodo={setFilterTodo}
      />

      <TodoList todos={todos} setTodos={setTodos} filterTodo={filterTodo} />
    </div>
  );
}

export default App;
