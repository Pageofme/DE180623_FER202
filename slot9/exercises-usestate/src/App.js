import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import "bootstrap/dist/css/bootstrap.min.css";
import ControlledInput from "./components/ControlledInput";
import ToggleText from "./components/ToggleText";
import TodoList from "./components/TodoList";
import ColorSwitcher from "./components/ColorSwitcher";
import SearchFilter from "./components/SearchFilter";
import DragAndDropList from "./components/DragAndDropList";
function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <ControlledInput />
      {/* <ToggleText /> */}
      {/* <TodoList /> */}
      {/* <ColorSwitcher /> */}
      {/* <SearchFilter /> */}
      {/* <DragAndDropList /> */}
    </div>
  );
}

export default App;
