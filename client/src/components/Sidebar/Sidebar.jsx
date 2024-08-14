import React, { useContext, useState } from "react";
import plusIcon from "../../assets/plusIcon.png";
import styles from "./Sidebar.module.css";
import Modal from "../Modal/Modal";
import AppContext from "../../context/AppContext";

function Sidebar() {
  const { groups, addGroup, selectGroup } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleGroupCreation(name, color) {
    addGroup(name, color);
    setIsModalOpen(false);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className={styles.sidebar}>
      <h1 className={styles.heading}>Pocket Notes</h1>
      <div className={styles.notesGroup}>
        {groups.map((group, index) => (
          <div
            key={index}
            className={styles.groupItem}
            style={{ backgroundColor: group.color }}
            onClick={() => selectGroup(group)}
          >
            <div className={styles.groupSymbol}>{group.symbol}</div>
          </div>
        ))}
      </div>
      <img
        src={plusIcon}
        alt="add-icon"
        className={styles.icon}
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <Modal
          onSubmit={handleGroupCreation}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Sidebar;
