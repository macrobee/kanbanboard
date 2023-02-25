import { useContext, useRef } from "react";

import { ItemsListContext } from "../contexts/itemsListContext";

import DragCard from "./dragCard";

const Container = ({ id: containerId }) => {
  const { currentItems } = useContext(ItemsListContext);
  const thisContainer = useRef(null);

  const offset = {top: thisContainer.current.offsetTop, left: thisContainer.current.offsetLeft}
  console.log(thisContainer.current);

  return (
    <div
      className="w-[300px] h-full border-2 rounded-lg border-solid border-slate-700"
      ref={thisContainer}
    >
      {currentItems[containerId] &&
        currentItems[containerId].map((item) => {
          return <DragCard key={item.id} id={item.id} offset={offset}/>;
        })}
    </div>
  );
};
export default Container;
