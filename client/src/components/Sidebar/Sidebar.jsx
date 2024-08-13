import React from "react";
import plusIcon from "../../assets/plusIcon.png";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h1 className={styles.heading}>Pocket Notes</h1>
      <div>Notes Group</div>
      <img src={plusIcon} alt="add-icon" className={styles.icon} />
    </div>
  );
}

export default Sidebar;
