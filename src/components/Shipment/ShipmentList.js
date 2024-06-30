import React, { useContext, useState } from "react";
import { ShipmentContext } from "../../contexts/ShipmentContext";
import EditPopup from "./ShipmentForm";
import "../../styles/Shiment.css";
import { useNavigate } from "react-router-dom";

const ShipmentList = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const { shipments } = useContext(ShipmentContext);
  const [selectedShipment, setSelectedShipment] = useState(null);

  const handleEditClick = (shipment) => {
    setSelectedShipment(shipment);
  };

  const handleClosePopup = () => {
    setSelectedShipment(null);
  };
  const handleGoback = () => {
    navigate(-1);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = shipments.filter(
      (item) =>
        item.origin.toLowerCase().includes(query) ||
        item.destination.toLowerCase().includes(query) ||
        item.status.toLowerCase().includes(query)
    );

    setFilteredItems(filtered);
  };

  const itemsToDisplay = searchQuery ? filteredItems : shipments;
  return (
    <div className="shipment-list">
      <div className="nav-iten">
        <img
          src="https://w7.pngwing.com/pngs/666/148/png-transparent-app-application-arrow-back-button-design-direction-dot-element-flat-thumbnail.png"
          alt="back button"
          height={20}
          onClick={handleGoback}
          style={{ cursor: "pointer", marginLeft: "10px" }}
        />
        <h2>List of Shipments</h2>{" "}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by status , origin ..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Shipment ID</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Estimated Delivery Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {itemsToDisplay.map((shipment) => (
            <tr key={shipment.id}>
              <td>{shipment.id}</td>
              <td>{shipment.origin}</td>
              <td>{shipment.destination}</td>
              <td>{shipment.status}</td>
              <td>{shipment.estimatedDelivery}</td>
              <td>
                <button onClick={() => handleEditClick(shipment)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedShipment && (
        <EditPopup shipment={selectedShipment} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default ShipmentList;
