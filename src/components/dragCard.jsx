
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
      className="flex justify-start items-center border-1 border-slate-400 rounded-lg border-solid bg-slate-100 hover:bg-slate-300 p-2 border-box z-10 min-w-[125px] max-w-full min-h-[40px] text-ellipsis overflow-hidden shadow-sm"
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {text}
    </div>
  );
};

export default DragCard;
