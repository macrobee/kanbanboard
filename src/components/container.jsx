import { useContext } from "react";

import { ItemsListContext } from "../contexts/itemsListContext";

import DragCard from "./dragCard";
import AddItemForm from "./addItemForm";

const Container = ({ id: containerId }) => {
  const { currentItems, moveItemToNewContainer, moveItemToEnd } =
    useContext(ItemsListContext);

  const handleDrop = (e) => {
    const cardToMove = e.dataTransfer.getData("cardId");
    const oldContainer = e.dataTransfer.getData("originalContainerId");
    const newContainer = containerId;

    if (oldContainer !== newContainer) {
      moveItemToNewContainer(cardToMove, oldContainer, newContainer);
    } else if (oldContainer === newContainer) {
      moveItemToEnd(cardToMove, oldContainer);
    }
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="w-[300px] h-full border-2 rounded-lg border-solid border-slate-700 relative flex flex-col justify-between items-center"
      onDrop={handleDrop}
      onDragOver={allowDrop}
    >
      <div className="flex flex-col justify-start items-start w-full h-auto">
        <h2 className="text-2xl mb-2">{containerId}</h2>

        {currentItems[containerId] &&
          currentItems[containerId].map((item) => (
            <DragCard key={item.id} id={item.id} containerId={containerId} text={item.text} />
          ))}
      </div>
      <AddItemForm
        placeholderText={"New item"}
        buttonText={"Add"}
        container={containerId}
      />
    </div>
  );
};
export default Container;
