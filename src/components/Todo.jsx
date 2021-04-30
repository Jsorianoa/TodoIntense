import React from "react";

const Todo = ({ text, todo, todos, setTodos, setStatus }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((to) => to.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(todos.map((item) => {
        if(item.id === todo.id){
            return {
                ...item, completed: !item.completed
            }
        }
        return item;
    }))
  };

  
  return (
    <>
      <li className={`item-lista ${todo.completed ? "item-lista-completa" : ""}`}>
        <label className="container" onChange={completeHandler}>
            <input type="checkbox"/>
            <span className="checkmark"></span>        
        </label>  
        {text}
        <div className="btn-icons">
          <button onClick={deleteHandler}>
            <i className="fas fa-trash"></i>
          </button>
          <button>
            <i className="fas fa-edit"></i>
          </button>
        </div>
      </li>
    </>
  );
};

export default Todo;
