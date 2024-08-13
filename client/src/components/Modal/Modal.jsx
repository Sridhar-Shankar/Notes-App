import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
function Modal({ open, onClose }) {
  if (!open) return;

  return createPortal(
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.modal}>
        <h1 className={styles.heading}>Create New Group</h1>
        <div className={styles.groupName}>
          <h1 className={styles.groupHead}>Group Name</h1>
          <input type="text" placeholder="Enter group name" />
        </div>
        <div className={styles.chooseColor}>
          <h1 className={styles.colorHead}>Choose color</h1>
          <div className={styles.colors}>
            <div className={styles.color1}></div>
            <div className={styles.color2}></div>
            <div className={styles.color3}></div>
            <div className={styles.color4}></div>
            <div className={styles.color5}></div>
            <div className={styles.color6}></div>
          </div>
        </div>
        <button onClick={onClose}>Create</button>
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
