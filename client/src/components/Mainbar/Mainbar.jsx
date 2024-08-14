import { useContext, useState } from "react";
import styles from "./Mainbar.module.css";
import AppContext from "../../context/AppContext";
import mainbar from "../../assets/mainbar.png";
import lock from "../../assets/lock.png";
import sendIcon from "../../assets/sendIcon.png";
import disabledIcon from "../../assets/disabledIcon.png";

function Mainbar() {
  const { selectedGroup, addNoteToGroup } = useContext(AppContext);
  const [note, setNote] = useState("");

  const handleAddNote = () => {
    if (note && selectedGroup) {
      addNoteToGroup(selectedGroup.name, note);
      setNote("");
    }
  };

  const isButtonDisabled = note.trim().length === 0;

  if (!selectedGroup) {
    return (
      <div className={styles.mainbar}>
        <div>
          <img src={mainbar} alt="mainbar-image" className={styles.mainIcon} />
          <h1>Pocket Notes</h1>
          <p>Send and receive messages without keeping your phone online.</p>
          <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
        <div className={styles.footer}>
          <img src={lock} alt="lock-img" className={styles.lockIcon} />
          <span>end-to-end encrypted</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mainBar}>
      <div className={styles.header}>
        <div
          className={styles.groupSymbol}
          style={{ backgroundColor: selectedGroup.color }}
        >
          {selectedGroup.initials}
        </div>
        <h2 className={styles.groupName}>{selectedGroup.name}</h2>
      </div>
      <div className={styles.notes}>
        {selectedGroup.notes.length > 0 ? (
          selectedGroup.notes.map((note, index) => (
            <div key={index} className={styles.note}>
              <p>{note.text}</p>
              <span className={styles.timestamp}>{note.timestamp}</span>
            </div>
          ))
        ) : (
          <p>No notes available.</p>
        )}
      </div>
      <div className={styles.noteInputWrapper}>
        <textarea
          placeholder="Enter the text here"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className={styles.textarea}
        />
        <button onClick={handleAddNote} className={styles.sendButton}>
          <img
            src={isButtonDisabled ? disabledIcon : sendIcon}
            alt="send-icon"
            className={styles.sendIcon}
          />
        </button>
      </div>
    </div>
  );
}

export default Mainbar;
