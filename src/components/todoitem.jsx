import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo ,toggle} from "../redux/features/todoslice";

export default function Todo({ item }) {
  const dispatch = useDispatch();
  let { task, completed, id } = item;
  const handleRemove = (payload) => {
    console.log(payload);
    dispatch(removeTodo(payload));
  };
  const handleToggle=(payload)=> {
    dispatch(toggle(payload));
  }
  return (
    <div className="item" >
      
      <p>{task}</p>
      <div className="chdiv"><input
        name="checkbox"
        className="checkbox"
        type="checkbox"
        checked={completed}
        value={completed}
        onChange={() => handleToggle(id)}
      /></div>
      
      <button onClick={() => handleRemove(id)}>X</button>
    </div>
  );
}
