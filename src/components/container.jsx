import { useContext } from "react";

import { ItemsListContext } from "../contexts/itemsListContext";

import DragCard from "./dragCard";

const Container = ({id:containerId})=>{
    const {currentItems} = useContext(ItemsListContext);

    return <div className="w-[300px] h-full border-2 rounded-lg border-solid border-slate-700">
        {currentItems[containerId] && currentItems[containerId].map((item)=>{
            return <DragCard key={item.id} id={item.id}/>
        })}
    </div>
}
export default Container;