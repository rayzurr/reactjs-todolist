import React from "react";

export default function TodoList() {
  let todos = ["Go to the gym", "Eat more fruits", "Pick up kids from school"];
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <li className="main" key={todoIndex}>
            {todo}
            <i class="fa-solid fa-pen-to-square"></i>
          </li>
        );
      })}
    </ul>
  );
}
