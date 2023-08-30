import "./ListItem.scss";

/* 
  props={
    text: string
    icon: <Component/>
    active: boolean
  };

*/

function ListItem(props) {

  const ListClassName = `list__item ${props.active ? "active" : ""}`
//not active: TextClassName = 'list__item__text';
//active : TextClassName ='list__item__text active';
  return (
    <>
      <li className={ListClassName}>
        {props.icon}
        <p className='list__item__text'>{props.name}</p>
      </li>
    </>
  );
}


export default ListItem;
