import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Supply Chain Management</h1>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/inventory" style={styles.navLink}>
              Inventory Management
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/shipments" style={styles.navLink}>
              Shipment Tracking
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/suppliers" style={styles.navLink}>
              Supplier Information
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "auto",
  },
  heading: {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "20px",
  },
  navList: {
    listStyleType: "none",
    padding: "0",
    textAlign: "center",
  },
  navItem: {
    display: "inline-block",
    margin: "10px",
  },
  navLink: {
    textDecoration: "none",
    color: "#ffff",
    fontSize: "1.2rem",
    fontWeight: "bold",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "green",
    transition: "background-color 0.3s ease",
  },
};
