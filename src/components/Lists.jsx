/* 
    props = {
        lists = Array <{id:number,text:string,icon:<Component/> ,active: boolean}>
    };

*/

import ListItem from "./ListItem";

/*  
               spread props เป็นทางเลือก
               <ListItem
                key={obj.id}
                {...obj}
              ></ListItem> */

/* 
                generalLists.map((obj)=>{
                  obj.key = obj.id;
                  delete obj.id;
                  return <ListItem {...obj} />
                });
              
              */
function Lists(props) {
  return (
    <>
      <ul className="list">
        {props.data.map((obj) => (
          <ListItem
            key={obj.id}
            name={obj.text}
            icon={obj.icon}
            active={obj.active}
          ></ListItem>
        ))}
      </ul>
    </>
  );
}

export default Lists;
