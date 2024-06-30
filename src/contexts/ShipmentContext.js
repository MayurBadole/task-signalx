import React, { createContext, useState } from "react";
import shipmentData from "../Constant-Data/ShipmentData";

export const ShipmentContext = createContext();

export const ShipmentProvider = ({ children }) => {
  const [shipments, setShipments] = useState(shipmentData);

  const updateShipmentStatus = (id, newStatus) => {
    const updatedShipments = shipments.map((shipment) =>
      shipment.id === id ? { ...shipment, status: newStatus } : shipment
    );
    setShipments(updatedShipments);
  };

  return (
    <ShipmentContext.Provider value={{ shipments, updateShipmentStatus }}>
      {children}
    </ShipmentContext.Provider>
  );
};
