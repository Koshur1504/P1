import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/todoslice";

export default function TodoForm() {
  const dispatch = useDispatch();
  let [form, setForm] = useState("");
  const handleAdd = (e) => {
    e.preventDefault();
    let todo = { id: crypto.randomUUID(), task: form, completed: false };
    dispatch(addTodo(todo));
    setForm("");
  };

  return (
    <>
      <form className="form" onSubmit={(e) => handleAdd(e)}>
        <input
          type="text"
          value={form}
          onChange={(e) => setForm(e.target.value)}
        />
        <button onClick={(e) => handleAdd(e)}>Add todo</button>
      </form>
    </>
  );
}
