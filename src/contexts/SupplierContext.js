import React, { createContext, useState } from "react";
import supplierData from "../Constant-Data/SupplierData";

export const SupplierContext = createContext();

export const SupplierContextProvider = ({ children }) => {
  const [suppliers, setSuppliers] = useState(supplierData);

  const addSupplier = (newSupplier) => {
    setSuppliers([...suppliers, { ...newSupplier, id: Date.now() }]);
  };

  const updateSupplier = (supplierId, updatedSupplier) => {
    setSuppliers(
      suppliers.map((supplier) =>
        supplier.id === supplierId
          ? { ...supplier, ...updatedSupplier }
          : supplier
      )
    );
  };

  const removeSupplier = (supplierId) => {
    setSuppliers(suppliers.filter((supplier) => supplier.id !== supplierId));
  };

  return (
    <SupplierContext.Provider
      value={{ suppliers, addSupplier, updateSupplier, removeSupplier }}
    >
      {children}
    </SupplierContext.Provider>
  );
};
