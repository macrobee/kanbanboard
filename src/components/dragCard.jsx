import { useState } from "react";

const cardDimensions = { width: 100, height: 30 };

const DragCard = ({ id, offset }) => {
  const [x, setX] = useState(offset.left);
  const [y, setY] = useState(offset.top+id*30);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", id);
    e.currentTarget.style.opacity = 0.4;
    e.currentTarget.style.position = "absolute";
  };

  const handleDragEnd = (e) => {
    e.dataTransfer.clearData();

    e.currentTarget.style.opacity = 1;
    setX(e.clientX - 0.5*cardDimensions.width);
    setY(e.clientY - 0.5*cardDimensions.height);
  };

  return (
    <div
      className="flex justify-center items-center border-2 border-slate-400 rounded-lg border-solid absolute bg-slate-200 p-2 border-box z-10 w-[100px] h-[30px]"
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{ top: y, left: x }}
    >
      I am card {id}
    </div>
  );
};

export default DragCard;
