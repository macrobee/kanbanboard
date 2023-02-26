import { useContext } from "react";

import { ItemsListContext } from "../contexts/itemsListContext";

import {ReactComponent as GarbageIcon} from '../assets/trash.svg'

const Garbage = () => {
  const { removeItemFromContainer } = useContext(ItemsListContext);

  const handleDrop = (e) => {
    const cardToMove = e.dataTransfer.getData("cardId");
    const oldContainer = e.dataTransfer.getData("originalContainerId");

    removeItemFromContainer(cardToMove, oldContainer);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="h-28 w-28 p-2 flex justify-center items-center bg-slate-300/50 hover:bg-slate-100/75 rounded-lg absolute right-2 bottom-28 md:bottom-2 z-20"
      onDragOver={allowDrop}
      onDrop={handleDrop}
    >
      <GarbageIcon width={30} height={30} />
    </div>
  );
};

export default Garbage;
