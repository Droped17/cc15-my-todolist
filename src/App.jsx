import "./app.scss";
import Header from "./components/Header";

function App() {
  return (
    <div className="todo">
      <div className="todo__header">
          <Header></Header>
      </div>
      <div className="todo__sidebar">SideBar</div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
