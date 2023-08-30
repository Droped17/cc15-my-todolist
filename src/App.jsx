import { FaCalendar, FaCalendarAlt, FaInbox } from "react-icons/fa";
import "./app.scss";
import Header from "./components/Header";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <Header></Header>
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <ul className="list">
              <ListItem
                name="Inbox"
                icon={<FaInbox className="list__item__icon"></FaInbox>}
              ></ListItem>

              <ListItem
                name="Today"
                icon={<FaCalendar className="list__item__icon"></FaCalendar>}
              ></ListItem>

              <ListItem
                name="Next 7 Days"
                icon={
                  <FaCalendarAlt className="list__item__icon"></FaCalendarAlt>
                }
              ></ListItem>
            </ul>
          </section>
          <section className="sidebar__category">2</section>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
