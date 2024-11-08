import React from "react";

function Cart({ cartItems, setCartItems }) {
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.container}>
      <h2>Votre Panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div style={styles.itemDetails}>
                <h3>{item.name}</h3>
                <p>Prix: {item.price}€</p>
                <div style={styles.quantityControls}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={styles.removeButton}
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
          <div style={styles.total}>
            <h3>Total: {total.toFixed(2)}€</h3>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    background: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  cartItem: {
    display: "flex",
    borderBottom: "1px solid #e0e0e0",
    padding: "20px",
    background: "#f8f9fa",
    margin: "10px 0",
    borderRadius: "8px",
  },
  image: {
    width: "120px",
    height: "120px",
    objectFit: "contain",
    marginRight: "20px",
    background: "#ffffff",
    padding: "10px",
    borderRadius: "8px",
  },
  itemDetails: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  quantityControls: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  removeButton: {
    backgroundColor: "#ff4757",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  total: {
    marginTop: "auto",
    padding: "20px",
    borderTop: "2px solid #e0e0e0",
    textAlign: "center",
    background: "#f1f2f6",
    borderRadius: "0 0 10px 10px",
  }
};

export default Cart;
