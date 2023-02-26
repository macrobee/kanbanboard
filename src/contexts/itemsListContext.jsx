import { useState, createContext } from "react";

const containerLists = {
  "first container": [],
  "second container": [
    { text: "it's", id: "1" },
    { text: "me", id: "2" },
    { text: "hi", id: "3" },
  ],
  "third container": [
    { text: "I'm", id: "4" },
    { text: "the", id: "5" },
    { text: "problem", id: "6" },
    { text: "it's", id: "7" },
    { text: "me", id: "8" },
  ],
};

export const ItemsListContext = createContext({
  currentItems: {},
  setCurrentItems: () => {},
});

export const ItemsListProvider = ({ children }) => {
  const [currentItems, setCurrentItems] = useState(containerLists);

  const value = { currentItems };

  return (
    <ItemsListContext.Provider value={value}>
      {children}
    </ItemsListContext.Provider>
  );
};
