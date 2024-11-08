import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div style={styles.product}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <div style={styles.productInfo}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Prix: {product.price}€</p>
        <button
          onClick={() => addToCart(product)}
          style={styles.button}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}

const styles = {
  product: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    height: "500px",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    marginBottom: "10px",
  },
  productInfo: {
    marginTop: "auto",
    padding: "10px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Product;
