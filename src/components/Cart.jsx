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
  },
  cartItem: {
    display: "flex",
    borderBottom: "1px solid #ddd",
    padding: "15px 0",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    marginRight: "20px",
  },
  itemDetails: {
    flex: 1,
  },
  quantityControls: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  removeButton: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  total: {
    marginTop: "20px",
    textAlign: "right",
  },
};

export default Cart;
