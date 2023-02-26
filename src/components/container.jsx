import { useContext, useState, useEffect, useRef } from "react";

import { ItemsListContext } from "../contexts/itemsListContext";

import DragCard from "./dragCard";

const Container = ({ id: containerId }) => {
  const { currentItems, moveItemToNewContainer } = useContext(ItemsListContext);

  const thisContainer = useRef(null);

  console.log(thisContainer);

  useEffect(() => {
    console.log(`container ${thisContainer} loaded`);
  }, []);

  console.log(thisContainer.current);

  const handleDrop = (e) => {
    const cardToMove = e.dataTransfer.getData("cardId");
    const oldContainer = e.dataTransfer.getData("originalContainerId");
    const newContainer = containerId;
    moveItemToNewContainer(cardToMove, oldContainer, newContainer);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };
  
  return (
    <div
      className="w-[300px] h-full border-2 rounded-lg border-solid border-slate-700 relative"
      ref={thisContainer}
      onDrop={handleDrop}
      onDragOver={allowDrop}
    >
      {currentItems[containerId] &&
        currentItems[containerId].map((item) => (
          <DragCard key={item.id} id={item.id} containerId={containerId} />
        ))}
    </div>
  );
};
export default Container;
