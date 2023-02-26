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
    <form onSubmit={handleSubmit} className="p-1 border-rounded flex flex-wrap">
      <input
        type="text"
        placeholder={placeholderText}
        onChange={handleChange}
        value={newItem}
        className="hover:bg-slate-200 px-2"
      />
      <button
        type="submit"
        className="px-4 py-1 flex justify-center items-center bg-orange-200 hover:bg-amber-400"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default AddItemForm;
