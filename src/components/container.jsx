import { useContext, useState, useEffect, useRef } from "react";

import { ItemsListContext } from "../contexts/itemsListContext";

import DragCard from "./dragCard";

const initialOffset = { top: 0, left: 0 };
const Container = ({ id: containerId }) => {
  const { currentItems } = useContext(ItemsListContext);
  const [offset, setOffset] = useState(initialOffset);

  const thisContainer = useRef(null);

  console.log(thisContainer);

  useEffect(() => {
    const newOffset = {
      top: thisContainer.current.offsetTop,
      left: thisContainer.current.offsetLeft,
    };
    setOffset(newOffset);
  }, []);

  console.log(thisContainer.current);

  return (
    <div
      className="w-[300px] h-full border-2 rounded-lg border-solid border-slate-700 relative"
      ref={thisContainer}
    >
      {currentItems[containerId] &&
        currentItems[containerId].map((item) => {
          const itemIndex = currentItems[containerId].indexOf(item);

          return (
            <DragCard
              key={item.id}
              id={item.id}
              offset={offset}
              index={itemIndex}
            />
          );
        })}
    </div>
  );
};
export default Container;
