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

const changeItemContainer = (
  itemsLists,
  itemToMoveId,
  oldContainer,
  newContainer
) => {
  const updatedOldList = itemsLists[oldContainer].filter(
    (item) => item.id !== itemToMoveId
  );
  const itemToMove = itemsLists[oldContainer].find(
    (item) => item.id === itemToMoveId
  );
  const updatedNewList = [...itemsLists[newContainer],itemToMove];

  const updatedItemsLists = {
    ...itemsLists,
    [oldContainer]: updatedOldList,
    [newContainer]: updatedNewList,
  };

  return updatedItemsLists;
};

export const ItemsListContext = createContext({
  currentItems: {},
  setCurrentItems: () => {},
  moveItemToNewContainer: ()=>{}
});

export const ItemsListProvider = ({ children }) => {
  const [currentItems, setCurrentItems] = useState(containerLists);

  const moveItemToNewContainer = (
    itemToMoveId,
    oldContainerId,
    newContainerId
  ) => {
    const newCurrentItems = changeItemContainer(
      currentItems,
      itemToMoveId,
      oldContainerId,
      newContainerId
    );
    setCurrentItems(newCurrentItems);
  };
  
  const value = { currentItems, moveItemToNewContainer };

  return (
    <ItemsListContext.Provider value={value}>
      {children}
    </ItemsListContext.Provider>
  );
};
