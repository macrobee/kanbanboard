import { useContext } from "react";

import { ItemsListContext } from "./contexts/itemsListContext";

import Header from './components/header';
import Container from "./components/container";
import Garbage from "./components/garbage";

function App() {
  const { currentItems } = useContext(ItemsListContext);

  return (
    <div className="h-[100vh] flex flex-col gap-2 justify-between items-center bg-gradient-to-b from-green-400 via-blue-500 to-purple-500 overflow-scroll font-mono">
      <Header text={"Kanban Board"} />

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
