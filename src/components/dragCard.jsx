
const DragCard = ({ id, containerId, text }) => {

  const handleDragStart = (e) => {
    e.dataTransfer.setData("cardId", id);
    e.dataTransfer.setData("originalContainerId",containerId);

    e.currentTarget.style.opacity = 0.4;
    e.currentTarget.style.transform = "translate(-5px, -5px)";
    e.currentTarget.style.boxShadow = "0 0 4px #333";
  };

  const handleDragEnd = (e) => {
    e.dataTransfer.clearData();

    e.currentTarget.style.opacity = 1;
    e.currentTarget.style.transform = "translate(0, 0)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <div
      className="flex justify-center items-center border-2 border-slate-400 rounded-lg border-solid bg-slate-200 p-2 border-box z-10 min-w-[125px] min-h-[40px]"
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {text}
    </div>
  );
};

export default DragCard;
