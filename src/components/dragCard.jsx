import { useState } from "react";

const cardDimensions = { width: 100, height: 30 };

const DragCard = ({ id, containerId }) => {

  const handleDragStart = (e) => {
    e.dataTransfer.setData("cardId", id);
    e.dataTransfer.setData("originalContainerId",containerId);

    e.currentTarget.style.opacity = 0.4;
    e.currentTarget.style.position = "absolute";
  };

  const handleDragEnd = (e) => {
    e.dataTransfer.clearData();
  };

  return (
    <div
      className="flex justify-center items-center border-2 border-slate-400 rounded-lg border-solid bg-slate-200 p-2 border-box z-10 w-[100px] h-[30px]"
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      I am card {id}
    </div>
  );
};

export default DragCard;
