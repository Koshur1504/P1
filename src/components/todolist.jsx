import React, { useState } from "react";
import Todo from "./todoitem";
import TodoForm from "./todoform";
import { useSelector } from "react-redux";

export default function TodoList() {
  let items = useSelector((state) => state.todo);

  return (
    <>
      <h1 className="tlheading">Todo list Using Redux</h1>
      <div className="main">
        <div className="list">
          {items.map((item) => {
            return <Todo key={item.id} item={item} />;
          })}
          <TodoForm  />
        </div>
      </div>
    </>
  );
}
