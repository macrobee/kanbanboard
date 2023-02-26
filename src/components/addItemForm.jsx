import { useState, useContext } from "react";
import uniqid from "uniqid";

import { ItemsListContext } from "../contexts/itemsListContext";

const AddItemForm = ({ placeholderText, buttonText, container }) => {
  const [newItem, setNewItem] = useState("");
  const { addItemToContainer } = useContext(ItemsListContext);

  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem) {
      addItemToContainer({ text: newItem, id: uniqid() }, container);
      setNewItem("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-rounded flex flex-wrap justify-between gap-2">
      <input
        type="text"
        placeholder={placeholderText}
        onChange={handleChange}
        value={newItem}
        className="hover:bg-slate-300 px-2 shadow-inner"
      />
      <button
        type="submit"
        className="px-4 py-1 flex justify-center items-center bg-green-300 hover:bg-blue-500 shadow-sm rounded"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default AddItemForm;
