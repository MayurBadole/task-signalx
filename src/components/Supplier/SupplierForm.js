import React, { useContext, useState, useEffect } from "react";
import { SupplierContext } from "../../contexts/SupplierContext";

const SupplierForm = ({ onSubmit, supplier, onClose }) => {
  const { addSupplier, updateSupplier } = useContext(SupplierContext);

  const [formData, setFormData] = useState({
    id: supplier ? supplier.id : "",
    name: supplier ? supplier.name : "",
    contactPerson: supplier ? supplier.contactPerson : "",
    phone: supplier ? supplier.phone : "",
    email: supplier ? supplier.email : "",
  });

  useEffect(() => {
    if (supplier) {
      setFormData({
        id: supplier.id,
        name: supplier.name,
        contactPerson: supplier.contactPerson,
        phone: supplier.phone,
        email: supplier.email,
      });
    } else {
      setFormData({
        id: "",
        name: "",
        contactPerson: "",
        phone: "",
        email: "",
      });
    }
  }, [supplier]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (supplier) {
      updateSupplier(formData.id, formData);
    } else {
      addSupplier(formData);
    }
    onSubmit(formData);
  };

  return (
    <div className="supplier-form-popup">
      <div className="supplier-form">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{supplier ? "Edit Supplier" : "Add Supplier"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Supplier Name"
            required
          />
          <input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            placeholder="Contact Person"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          <div className="Actions">
            <button type="submit">
              {supplier ? "Update Supplier" : "Add Supplier"}
            </button>
            <button onClick={onClose}>cancel</button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupplierForm;
