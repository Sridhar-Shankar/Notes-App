import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setGroups(storedGroups);
  }, []);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  const addGroup = (name, color) => {
    const initials = name.split(' ').map(word => word[0]).join('').toUpperCase();
    const newGroup = { name, initials, color, notes: [] };
    setGroups([...groups, newGroup]);
  };

  const selectGroup = (group) => {
    setSelectedGroup(group);
  };

  function addNoteToGroup(groupName, noteText) {
    const now = new Date();
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    const timestamp = now.toLocaleString('en-GB', options).replace(',', ''); 
  
    setGroups((prevGroups) => {
      const updatedGroups = prevGroups.map((group) =>
        group.name === groupName
          ? { ...group, notes: [...group.notes, { text: noteText, timestamp }] }
          : group
      );
      const updatedSelectedGroup = updatedGroups.find(group => group.name === groupName);
      setSelectedGroup(updatedSelectedGroup);
      return updatedGroups;
    });
  }
  return (
    <AppContext.Provider value={{ groups, selectedGroup, addGroup, selectGroup, addNoteToGroup }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
