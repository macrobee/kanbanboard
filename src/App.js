import { useContext } from "react";

import { ItemsListContext } from "./contexts/itemsListContext";

import Container from "./components/container";
import Garbage from "./components/garbage";

function App() {
  const { currentItems } = useContext(ItemsListContext);

  return (
    <div className="h-[100vh] flex flex-col gap-2 justify-between items-center bg-gradient-to-b from-green-400 via-blue-500 to-purple-500 overflow-hidden font-mono">
      <h1 className="text-xl font-bold self-start shadow-lg w-full bg-slate-200/50 px-4 py-2">
        Kanban Board
      </h1>

      <div className="grow w-auto flex p-2 gap-2 overflow-hidden">
        {Object.keys(currentItems).map((containerId) => (
          <Container id={containerId} key={containerId} />
        ))}
        <Garbage />
      </div>
    </div>
  );
}

export default App;
