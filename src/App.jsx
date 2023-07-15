import "./App.css";
import TodoList from "./components/todolist";
import store from "./redux/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </>
  );
}
