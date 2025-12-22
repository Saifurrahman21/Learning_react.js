import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    //console.log("we have to add new task in todo");
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    //console.log(event.target.value);
    setNewTodo(event.target.value);
  };

  //for delete any thing in react we use filter method to filter out that thing
  let deleteTodo = (id) => {
    // let copy = todos.filter((todo) => todo.id != id);
    // console.log(copy);
    setTodos((prevTodos) => todos.filter((prevTodo) => prevTodo.id != id));
  };

  //updating all the element in Array
  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  //updating one element in array
  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
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
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => markAsDone(todo.id)}>markAsDone</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={markAllDone}>Mark All as Done</button>
    </div>
  );
}
