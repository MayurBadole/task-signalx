import React, { useState, useEffect } from "react";

const InventoryForm = ({ addItem, updateItem, item, setShowAddForm }) => {
  const [formData, setFormData] = useState({
    id: item ? item.id : "",
    name: item ? item.name : "",
    sku: item ? item.sku : "",
    quantity: item ? item.quantity : "",
    location: item ? item.location : "",
  });

  useEffect(() => {
    setFormData({
      id: item ? item.id : "",
      name: item ? item.name : "",
      sku: item ? item.sku : "",
      quantity: item ? item.quantity : "",
      location: item ? item.location : "",
    });
  }, [item]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      updateItem(item.id, formData);
    } else {
      addItem(formData);
    }
    setFormData({ id: "", name: "", sku: "", quantity: "", location: "" });
    setShowAddForm(false);
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{item ? "Edit Item" : "Add New Item"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Item Name"
          />

          <input
            type="text"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            required
            placeholder="SKU"
          />

          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            placeholder="Quantity"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Warehouse Location"
          />
          <div className="button-group">
            <button type="submit">{item ? "Update Item" : "Add Item"}</button>
            <button onClick={() => setShowAddForm(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InventoryForm;
