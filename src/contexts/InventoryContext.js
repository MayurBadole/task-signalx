import React, { createContext, useState, useEffect } from "react";
import inventory_data from "../Constant-Data/InventryData";
export const InventoryContext = createContext();

export const InventoryContextProvider = ({ children }) => {
  const [inventory, setInventory] = useState(inventory_data);

  const [currentItems, setCurrentItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentItems(inventory.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, inventory, itemsPerPage]);

  const addItem = (newItem) => {
    setInventory([...inventory, { ...newItem, id: Date.now() }]);
  };

  const updateItem = (itemId, updatedItem) => {
    setInventory(
      inventory.map((item) =>
        item.id === itemId ? { ...item, ...updatedItem } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setInventory(inventory.filter((item) => item.id !== itemId));
  };

  return (
    <InventoryContext.Provider
      value={{
        inventory,
        currentItems,
        addItem,
        updateItem,
        removeItem,
        currentPage,
        itemsPerPage,
        paginate,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
