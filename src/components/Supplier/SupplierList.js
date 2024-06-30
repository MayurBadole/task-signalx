import React, { useContext, useState } from "react";
import { SupplierContext } from "../../contexts/SupplierContext";
import SupplierForm from "./SupplierForm";
import "../../styles/SupplierList.css";
import { useNavigate } from "react-router-dom";

const SupplierList = () => {
  const navigate = useNavigate();
  const { suppliers, removeSupplier } = useContext(SupplierContext);
  const [showForm, setShowForm] = useState(false);
  const [editSupplier, setEditSupplier] = useState(null);

  const toggleForm = (supplier) => {
    setShowForm(!showForm);
    setEditSupplier(supplier ? supplier : null);
  };

  const handleEditClick = (supplier) => {
    toggleForm(supplier);
  };

  const handleAddClick = () => {
    toggleForm(null);
  };

  const handleRemoveClick = (supplierId) => {
    removeSupplier(supplierId);
  };

  const handleSubmitForm = () => {
    setShowForm(false);
    setEditSupplier(null);
  };
  const handleGoback = () => {
    navigate(-1);
  };

  return (
    <div className="supplier-container">
      <div className="table-container">
        <img
          src="https://w7.pngwing.com/pngs/666/148/png-transparent-app-application-arrow-back-button-design-direction-dot-element-flat-thumbnail.png"
          alt="back button"
          height={20}
          onClick={handleGoback}
          style={{ cursor: "pointer" , marginLeft:"10px"}}
        />
        <button className="Addbutton" onClick={handleAddClick}>
          Add Supplier
        </button>
        <table className="supplier-table">
          <thead>
            <tr>
              <th>Supplier Name</th>
              <th>Contact Person</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.id}>
                <td>{supplier.name}</td>
                <td>{supplier.contactPerson}</td>
                <td>{supplier.phone}</td>
                <td>{supplier.email}</td>
                <td>
                  <button onClick={() => handleEditClick(supplier)}>
                    Edit
                  </button>
                  <button onClick={() => handleRemoveClick(supplier.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showForm && (
          <div className="supplier-form-popup">
            <SupplierForm
              onSubmit={handleSubmitForm}
              supplier={editSupplier}
              onClose={handleSubmitForm}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplierList;
