import styles from "./TodoHeader.module.scss";
// module.scss ใช้แก้ปัญหาไม่ให้ชื่อ className ตรงกัน

function TodoHeader() {
    const today = new Date();
    const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
    }; 
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.header__text}>Inbox</h1>
        <span className={styles.header__date}>{today.toLocaleString('en-US',options)}</span>
      </div>
    </>
  );
}

export default TodoHeader;