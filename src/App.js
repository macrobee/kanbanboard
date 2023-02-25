import { useContext } from "react";

import { ItemsListContext } from "./contexts/itemsListContext";

import Container from "./components/container";

function App() {
  const { currentItems } = useContext(ItemsListContext);

  return (
    <div className="bg-slate-300 h-[100vh] flex flex-col gap-2 justify-between items-center p-2">
      <h1 className="text-3xl">Kanban Board</h1>
      
      <div className="border-2 rounded-lg border-solid border-slate-700 grow w-auto flex">
        {Object.keys(currentItems).map((containerId) => (
          <Container id={containerId} key={containerId} />
        ))}
      </div>
    </div>
  );
}

export default App;
