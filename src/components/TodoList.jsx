import React from "react";
import Todo from "./Todo";

const TodoList = ({todos,setTodos, filterTodo}) => {
  return (
    <div className="content-lista">
      <ul className="lista-tarea">
          {filterTodo.map( (todo) => {
              return <Todo 
              key={todo.id} 
              text={todo.text} 
              todo={todo}
              todos={todos} 
              setTodos={setTodos}
              />
          })}         
      </ul>
    </div>
  );
};

export default TodoList;
