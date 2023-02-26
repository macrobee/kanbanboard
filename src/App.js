import { useContext } from "react";

import { ItemsListContext } from "./contexts/itemsListContext";

import Container from "./components/container";

function App() {
  const { currentItems } = useContext(ItemsListContext);

  return (
    <div className="h-[100vh] flex flex-col gap-2 justify-between items-center p-2 relative bg-gradient-to-b to-orange-200 from-amber-400">
      <h1 className="text-4xl font-bold self-start border-b-4 border-slate-700">Kanban Board</h1>
      
      <div className="border-2 rounded-lg border-solid border-slate-700 grow w-auto flex">
        {Object.keys(currentItems).map((containerId) => (
          <Container id={containerId} key={containerId} />
        ))}
      </div>
    </div>
  );
}

export default App;
