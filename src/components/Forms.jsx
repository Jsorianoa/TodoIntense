import React from "react";



export const Forms = ({inputText, setinputText, todos, setTodos, setStatus}) => {
  const inputTextHandler = (e) => {
    setinputText(e.target.value);

  }
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text:inputText, completed: false, id: Math.random()*110}
    ]);
    setinputText("");
  };
  
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }
  return (
    <>
      <form className="contenedor">
        <div className="cont-text">
          <input value={inputText} onChange={inputTextHandler} type="text" id="tarea" />
          <button type="submit" className="add" onClick={submitHandler}>
            <i className="fas fa-plus-square"></i>
          </button>
        </div>
        <div className="content-select">
          <select name="tasks" id="task" onChange={statusHandler}>
            <option value="todas">Todas las tareas</option>
            <option value="completadas"> Completadas</option>
            <option value="incompletas"> Por completar</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Forms;