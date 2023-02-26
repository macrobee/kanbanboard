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

const changeItemList = (
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
  const updatedNewList = [...itemsLists[newContainer], itemToMove];

  const updatedItemsLists = {
    ...itemsLists,
    [oldContainer]: updatedOldList,
    [newContainer]: updatedNewList,
  };

  return updatedItemsLists;
};

const moveItemToEndOfList = (itemsLists, itemToMoveId, container) => {
  const listWithItemRemoved = itemsLists[container].filter(
    (item) => item.id !== itemToMoveId
  );
  const itemToMove = itemsLists[container].find(
    (item) => item.id === itemToMoveId
  );
  const updatedNewList = [...listWithItemRemoved, itemToMove];

  const updatedItemsLists = {
    ...itemsLists,
    [container]: updatedNewList,
  };

  return updatedItemsLists;
};

const addItemToList = (itemLists, newItem, targetContainer) => {
  const updatedList = [...itemLists[targetContainer], newItem];
  const updatedItemLists = { ...itemLists, [targetContainer]: updatedList };
  return updatedItemLists;
};

const deleteItemFromList = (itemLists, itemToDeleteId, container) => {
  const updatedList = itemLists[container].filter((item)=>item.id!==itemToDeleteId);
  return updatedList;
}

export const ItemsListContext = createContext({
  currentItems: {},
  setCurrentItems: () => {},
  moveItemToNewContainer: () => {},
  moveItemToEnd: () => {},
  addItemToContainer: () => {},
  removeItemFromContainer: () => {},
});

export const ItemsListProvider = ({ children }) => {
  const [currentItems, setCurrentItems] = useState(containerLists);

  const moveItemToNewContainer = (
    itemToMoveId,
    oldContainerId,
    newContainerId
  ) => {
    const newCurrentItems = changeItemList(
      currentItems,
      itemToMoveId,
      oldContainerId,
      newContainerId
    );
    setCurrentItems(newCurrentItems);
  };

  const moveItemToEnd = (itemToMoveId, containerId) => {
    const updatedList = moveItemToEndOfList(
      currentItems,
      itemToMoveId,
      containerId
    );
    setCurrentItems(updatedList);
  };

  const addItemToContainer = (itemToAdd, targetContainer) => {
    const updatedItemLists = addItemToList(
      currentItems,
      itemToAdd,
      targetContainer
    );
    setCurrentItems(updatedItemLists);
  };

  const removeItemFromContainer = (itemToRemoveId, container) =>{
    const updatedItemLists = deleteItemFromList(currentItems, itemToRemoveId, container);
    setCurrentItems(updatedItemLists);
  }
  
  const value = {
    currentItems,
    moveItemToNewContainer,
    moveItemToEnd,
    addItemToContainer,
    removeItemFromContainer
  };

  return (
    <ItemsListContext.Provider value={value}>
      {children}
    </ItemsListContext.Provider>
  );
};
