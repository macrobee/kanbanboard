import { useState } from "react";

const cardDimensions = { width: 100, height: 30 };

const DragCard = ({ id, offset, index }) => {
  const [x, setX] = useState(offset.left);
  const [y, setY] = useState(offset.top + index * 30);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", id);
    e.currentTarget.style.opacity = 0.4;
    e.currentTarget.style.position = "absolute";
  };

  const handleDragEnd = (e) => {
    e.dataTransfer.clearData();

    console.log(offset.left, offset.top);
    console.log(e.clientX, e.clientY);
    console.log(
      ( e.clientX - offset.left - 0.5 * cardDimensions.width) + " "+
      (e.clientY - offset.top - 0.5 * cardDimensions.height)
    );

    e.currentTarget.style.opacity = 1;
    setX(e.clientX - offset.left - 0.5 * cardDimensions.width);
    setY(e.clientY - offset.top - 0.5 * cardDimensions.height);
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
