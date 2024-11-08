import React from "react";
import { Link } from "react-router-dom";

function Header({ cartItemsCount }) {
  return (
    <header style={styles.header}>
      <Link to="/" style={styles.link}>
        <h1 style={styles.title}>
          <i className="fas fa-laptop" style={styles.icon}></i>
          TechShop
        </h1>
      </Link>
      <Link to="/cart" style={styles.cartLink}>
        <div className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">{cartItemsCount}</span>
        </div>
      </Link>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 2rem",
    background: "linear-gradient(135deg, #6c5ce7, #a363d8)",
    color: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  title: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "1.8rem",
  },
  icon: {
    marginRight: "10px",
  },
  cartLink: {
    textDecoration: "none",
    color: "white",
    fontSize: "1.2rem",
  },
};

export default Header;
