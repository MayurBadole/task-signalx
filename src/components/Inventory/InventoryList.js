import React, { useContext, useState } from "react";
import { InventoryContext } from "../../contexts/InventoryContext";
import InventoryForm from "./InventoryForm";
import "../../styles/InventoryList.css";
import { useNavigate } from "react-router-dom";

const InventoryList = () => {
  const navigate = useNavigate();

  const {
    inventory,
    addItem,
    updateItem,
    removeItem,
    currentPage,
    currentItems,
    itemsPerPage,
    paginate,
  } = useContext(InventoryContext);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
    setEditItem(null);
  };

  const handleEditClick = (item) => {
    setEditItem(item);
    setShowAddForm(true);
  };

  const handleRemoveClick = (itemId) => {
    removeItem(itemId);
  };

  const handleGoback = () => {
    navigate(-1);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = inventory.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.sku.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.quantity.includes(query)
    );

    setFilteredItems(filtered);
  };

  // Determine which array to use based on search state
  const itemsToDisplay = searchQuery ? filteredItems : currentItems;

  return (
    <div>
      <img
        src="https://w7.pngwing.com/pngs/666/148/png-transparent-app-application-arrow-back-button-design-direction-dot-element-flat-thumbnail.png"
        alt="back button"
        height={20}
        onClick={handleGoback}
        style={{ cursor: "pointer", marginLeft: "10px" }}
      />
      <button className="Addbutton" onClick={toggleAddForm}>
        Add Item
      </button>
      {showAddForm && (
        <InventoryForm
          addItem={addItem}
          updateItem={updateItem}
          item={editItem}
          setShowAddForm={setShowAddForm}
        />
      )}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Name, SKU, Location..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>SKU</th>
            <th>Quantity</th>
            <th>Warehouse Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {itemsToDisplay.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.sku}</td>
              <td>{item.quantity}</td>
              <td>{item.location}</td>
              <td>
                <button onClick={() => handleEditClick(item)}>Edit</button>
                <button onClick={() => handleRemoveClick(item.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentItems.length < itemsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InventoryList;
