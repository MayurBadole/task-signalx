import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ShipmentProvider } from "./contexts/ShipmentContext";
import InventoryPage from "./pages/InventoryPage";
import ShipmentPage from "./pages/ShipmentPage";
import SupplierPage from "./pages/SupplierPage";
import GlobalStyles from "./styles/GlobalStyles";
import HomePage from "./pages/Home";
import { InventoryContextProvider } from "./contexts/InventoryContext";
import { SupplierContextProvider } from "./contexts/SupplierContext";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <InventoryContextProvider>
        <ShipmentProvider>
          <SupplierContextProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />

              <Route path="/home" exact element={<HomePage />} />
              <Route path="/inventory" element={<InventoryPage />} />
              <Route path="/shipments" element={<ShipmentPage />} />
              <Route path="/suppliers" element={<SupplierPage />} />
            </Routes>
          </SupplierContextProvider>
        </ShipmentProvider>
      </InventoryContextProvider>
    </Router>
  );
}

export default App;
