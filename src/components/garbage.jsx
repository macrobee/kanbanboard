import { useContext, useState } from "react";

import { ItemsListContext } from "../contexts/itemsListContext";

import {ReactComponent as GarbageIcon} from '../assets/trash.svg'

const Garbage = () => {
  const { removeItemFromContainer } = useContext(ItemsListContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleDrop = (e) => {
    const cardToMove = e.dataTransfer.getData("cardId");
    const oldContainer = e.dataTransfer.getData("originalContainerId");
    removeItemFromContainer(cardToMove, oldContainer);

    setIsHovered(false);
  };

  const allowDrop = (e) => {
    e.preventDefault();
    setIsHovered(true);
  };

  const handleDragLeave = (e)=>{
    setIsHovered(false);
  }

  return (
    <div
      className={`h-28 w-28 p-2 flex justify-center items-center bg-slate-300/50 hover:bg-slate-100/75 rounded-lg absolute right-2 bottom-28 md:bottom-2 z-20 ${isHovered ? "bg-red-400/75" : ""}`}
      onDragOver={allowDrop}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
    >
      <GarbageIcon width={30} height={30} />
    </div>
  );
};

export default Garbage;
