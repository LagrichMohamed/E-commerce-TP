import React, { useState } from "react";
import Product from "./Product";
import samsungTV8000 from "../assets/Images/samsung8000.png";
import samsungTVQ8000Qled from "../assets/Images/q800.png";
import samsungTVQ90 from "../assets/Images/smsungq90.png";
import sonytvbravia from "../assets/Images/sonybravia.png";
import sonytvx950 from "../assets/Images/sonyx950.png";
import lgNanoCell from "../assets/Images/nanocell.png";
import lgoled from "../assets/Images/lgoled.png";
import KD65A9G from "../assets/Images/KD65A9G.webp";
import galaxys20 from "../assets/Images/galaxys20.png";
import googlepixel4a from "../assets/Images/googlepixel4a.png";
import googlepixel5 from "../assets/Images/googlepixel5.png";
import iphone11 from "../assets/Images/iphone11.png";
import iphone12 from "../assets/Images/iphone12.png";
import S20ultra from "../assets/Images/S20ultra.png";
import s21 from "../assets/Images/s21.webp";
import samsunggalaxys21 from "../assets/Images/samsunggalaxys21.png";

function ProductList({ addToCart }) {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "Smart Samsung TV 8000 4K",
      price: 899.99,
      image: samsungTV8000,
      description: "TV 4K Ultra HD avec HDR et Smart TV intégré",
      category: "tv"
    },
    {
      id: 2,
      name: "TV Samsung Q90OLED Premium",
      price: 2499.99,
      image: samsungTVQ90,
      description: "TV OLED avec des noirs parfaits et des couleurs éclatantes",
      category: "tv"
    },
    {
      id: 3,
      name: "TV Sony BraviaLED Full HD",
      price: 749.99,
      image: sonytvbravia,
      description: "TV LED Full HD avec une excellente qualité d'image",
      category: "tv"
    },
    {
      id: 4,
      name: "TV Sony X950 QLED 8K",
      price: 2999.99,
      image: sonytvx950,
      description: "TV QLED 8K avec une résolution exceptionnelle",
      category: "tv"
    },
    {
      id: 5,
      name: "TV Samsung Q800O 8K QLED",
      price: 3499.99,
      image: samsungTVQ8000Qled,
      description: "TV OLED avec des noirs parfaits et des couleurs éclatantes",
      category: "tv"
    },
    {
      id: 6,
      name: "TV LG NanoCell Premium",
      price: 1199.99,
      image: lgNanoCell,
      description: "TV NanoCell avec des couleurs vives et un grand angle de vision",
      category: "tv"
    },
    {
      id: 7,
      name: "TV LG OLED C2",
      price: 1799.99,
      image: lgoled,
      description: "TV OLED avec processeur α9 Gen5 AI et Dolby Vision IQ",
      category: "tv"
    },
    {
      id: 8,
      name: "TV Sony BRAVIA XR A9G OLED",
      price: 2299.99,
      image: KD65A9G,
      description: "TV OLED Master Series avec processeur cognitif XR",
      category: "tv"
    },
    {
      id: 9,
      name: "Google Pixel 4a",
      price: 299.99,
      image: googlepixel4a,
      description: "Smartphone compact avec un excellent appareil photo et Android stock",
      category: "phone"
    },
    {
      id: 10,
      name: "Google Pixel 5",
      price: 449.99,
      image: googlepixel5,
      description: "Le flagship Google avec 5G et performances photo exceptionnelles",
      category: "phone"
    },
    {
      id: 11,
      name: "iPhone 11",
      price: 499.99,
      image: iphone11,
      description: "iPhone avec double appareil photo et puce A13 Bionic puissante",
      category: "phone"
    },
    {
      id: 12,
      name: "iPhone 12",
      price: 699.99,
      image: iphone12,
      description: "iPhone 5G avec écran OLED et processeur A14 Bionic",
      category: "phone"
    },
    {
      id: 13,
      name: "Samsung Galaxy S20 Ultra",
      price: 799.99,
      image: S20ultra,
      description: "Smartphone premium avec zoom 100x et écran 120Hz",
      category: "phone"
    },
    {
      id: 14,
      name: "Samsung Galaxy S21",
      price: 699.99,
      image: s21,
      description: "Flagship Samsung avec processeur Exynos 2100 et design premium",
      category: "phone"
    },
    {
      id: 15,
      name: "Samsung Galaxy S21+",
      price: 849.99,
      image: samsunggalaxys21,
      description: "Version plus grande du S21 avec batterie améliorée",
      category: "phone"
    }
  ];

  const uniqueCategories = [...new Set(products.map(product => product.category))];

  const filterProducts = (products) => {
    return products
      .filter(product => {
        if (categoryFilter === "all") return true;
        return product.category === categoryFilter;
      })
      .filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
  };

  const filteredProducts = filterProducts(products);

  return (
    <div style={styles.container}>
      <div style={styles.filters}>
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchInput}
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={styles.select}
        >
          <option value="all">Toutes les catégories</option>
          {uniqueCategories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div style={styles.grid}>
        {filteredProducts.map((product) => (
          <Product 
            key={product.id} 
            product={product} 
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  filters: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
    padding: "0 20px",
  },
  searchInput: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    width: "200px",
  },
  select: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
};

export default ProductList;
