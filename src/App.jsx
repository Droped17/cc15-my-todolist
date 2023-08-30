import {
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
  FaInbox,
} from "react-icons/fa";
import "./app.scss";
import Header from "./components/Header";
import Lists from "./components/Lists";

function App() {
  const generalLists = [
    { id: 1, text: "Inbox", active: true, icon: <FaInbox></FaInbox> },
    { id: 2, text: "Today", active: false, icon: <FaCalendar></FaCalendar> },
    {
      id: 3,
      text: "Next 7 Days",
      active: false,
      icon: <FaCalendarAlt></FaCalendarAlt>,
    },
  ];

  const projectLists = [
    { id: 1, text: "Work1", active: true, icon: <FaInbox></FaInbox> },
    { id: 2, text: "Work2", active: false, icon: <FaInbox></FaInbox> },
  ];

  return (
    <div className="todo">
      <div className="todo__header">
        <Header></Header>
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <Lists data={generalLists}></Lists>
          </section>

          <section className="sidebar__category">
            <div className="accordion">
              {/* Toggle */}
              <div className="accordion__toggle">
                <li className="accordion__item">
                  <FaChevronDown className="accordion__item__icon accordion__item__active"></FaChevronDown>
                  <p className="accordion__item__text">Projects</p>
                </li>
              </div>

              {/* List */}
              <Lists data={projectLists}></Lists>

            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
