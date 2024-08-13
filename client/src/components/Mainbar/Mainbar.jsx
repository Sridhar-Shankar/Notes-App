import React from "react";
import styles from "./Mainbar.module.css";
import mainbar from "../../assets/mainbar.png";
import lock from "../../assets/lock.png";

function Mainbar() {
  return (
    <div className={styles.mainbar}>
      <div>
        <img src={mainbar} alt="mainbar-image" className={styles.mainIcon} />
        <h1>Pocket Notes</h1>
        <p>Send and receive messages without keeping your phone online.</p>
        <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      </div>
      <div className={styles.footer}>
        <img src={lock} alt="lock-img"className={styles.lockIcon} />
        <span>end-to-end encrypted</span>
      </div>
    </div>
  );
}

export default Mainbar;
