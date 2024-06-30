import React from "react";
import ShipmentList from "../components/Shipment/ShipmentList";

const ShipmentPage = () => {
  return (
    <div>
      <h1 className="titles">Shipment Tracking</h1>

      <ShipmentList />
    </div>
  );
};

export default ShipmentPage;
