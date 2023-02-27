import { useState } from "react";

const DragCard = ({ id, containerId, text }) => {
  const [isBeingDragged, setIsBeingDragged] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("cardId", id);
    e.dataTransfer.setData("originalContainerId",containerId);

    setIsBeingDragged(true);
  };

  const handleDragEnd = (e) => {
    e.dataTransfer.clearData();

    setIsBeingDragged(false);
  };

  return (
    <div
      className={`flex justify-start items-center border-1 border-slate-400 rounded-lg border-solid bg-slate-100 hover:bg-slate-300 p-2 border-box z-10 w-full min-h-[40px] text-clip shadow-sm ${isBeingDragged ? "drop-shadow-lg -translate-x-2 -translate-y-2 opacity-40" : ""}`}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {text}
    </div>
  );
};

export default DragCard;
