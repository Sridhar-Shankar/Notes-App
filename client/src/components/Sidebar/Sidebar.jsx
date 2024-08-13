import React, { useState } from "react";
import plusIcon from "../../assets/plusIcon.png";
import styles from "./Sidebar.module.css";
import Modal from "../Modal/Modal";

function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleGroupCreation() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className={styles.sidebar}>
      <h1 className={styles.heading}>Pocket Notes</h1>
      <div className={styles.notesGroup}>Notes Group</div>
      <img
        src={plusIcon}
        alt="add-icon"
        className={styles.icon}
        onClick={handleGroupCreation}
      />
      {isModalOpen && <Modal open={isModalOpen} onClose={closeModal} />}
    </div>
  );
}

export default Sidebar;
