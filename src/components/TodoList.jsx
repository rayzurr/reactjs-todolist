import React from "react";

export default function TodoList() {
  let todos = ["Go to the gym", "Eat more fruits", "Pick up kids from school"];
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex}></TodoCard>
        );
      })}
    </ul>
  );
}
