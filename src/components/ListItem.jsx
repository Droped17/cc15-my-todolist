import "./ListItem.scss";

function ListItem(props) {
  return (
    <>
      <li className="list__item">
        {props.icon}
        <p className="list__item__text">{props.name}</p>
      </li>
    </>
  );
}

export default ListItem;
