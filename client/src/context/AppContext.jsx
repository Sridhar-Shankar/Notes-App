import React, { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  function addGroup(name, color) {
    const groupName = name
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase();
    const newGroup = { name, symbol: groupName, color, notes: [] };
    setGroups([...groups, newGroup]);
  }

  function selectGroup(group) {
    setSelectedGroup(group);
  }

  return (
    <AppContext.Provider
      value={{ groups, selectedGroup, addGroup, selectGroup }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
