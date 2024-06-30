import React, { useContext, useState } from "react";
import { ShipmentContext } from "../../contexts/ShipmentContext";

const EditPopup = ({ shipment, onClose }) => {
  const { updateShipmentStatus } = useContext(ShipmentContext);
  const [newStatus, setNewStatus] = useState(shipment.status);

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
  };

  const handleSave = () => {
    updateShipmentStatus(shipment.id, newStatus);
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Edit Shipment</h2>
        <p>Shipment ID: {shipment.id}</p>
        <p>Origin: {shipment.origin}</p>
        <p>Destination: {shipment.destination}</p>
        <label>
          Status:
          <select value={newStatus} onChange={handleStatusChange}>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
            <option value="Delayed">Delayed</option>
          </select>
        </label>
        <div>
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditPopup;
