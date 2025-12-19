import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    //console.log("we have to add new task in todo");
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    //console.log(event.target.value);
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <input
        placeholder="Add a task"
        type="text"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>Todo List</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}
