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
      className="h-28 w-28 p-2 flex justify-center items-center bg-slate-200/50 hover:bg-slate-200/75 rounded-lg"
      onDragOver={allowDrop}
      onDrop={handleDrop}
    >
      <GarbageIcon width={50} height={50} />
    </div>
  );
};

export default Garbage;
