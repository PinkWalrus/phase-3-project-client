import React, { useState, useEffect } from "react";
import AddProductForm from "./AddProductForm";
import FilterCategory from "./FilterCategory";
import Product from "./Product";

import header from "../assets/shopping-list-01.svg";

function ShoppingList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:9292/products")
      .then((r) => r.json())
      .then((products) => setProducts([...products]));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/category")
      .then((r) => r.json())
      .then((categories) => {
        setCategories([...categories]);
      });
  }, []);

  function addProduct(newProduct) {
    setProducts([newProduct, ...products]);
  }

  function updateProduct(updatedProduct) {
    const updatedProducts = products.map((product) => {
      if (product.id === updatedProduct.id) {
        return updatedProduct;
      } else {
        return product;
      }
    });
    setProducts(updatedProducts);
  }

  function deleteProduct(deletedProduct) {
    setProducts(products.filter((product) => product.id !== deletedProduct.id));
  }

  function changeCategory(category) {
    setSelectedCategory(category);
  }

  const productsToDisplay = products.filter((product) => {
    if (selectedCategory === "All") return true;
    return product.category.name.toLowerCase() === selectedCategory;
  });

  return (
    <div>
      <img className="header" alt="logo" src={header} />
      <AddProductForm onAddProduct={addProduct} />
      <FilterCategory onCategoryChange={changeCategory} />
      <ul className="scroller">
        {productsToDisplay.map((product) => (
          <Product
            key={product.id}
            product={product}
            onUpdateProduct={updateProduct}
            onDeleteProduct={deleteProduct}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
