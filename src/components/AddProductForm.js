import { useState } from "react";

function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Dairy");

  function addToForm(e) {
    e.preventDefault();
    const productData = {
      name: name,
      desc: desc,
      category: category,
      isInCart: false,
    };
    fetch("http://localhost:9292/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((r) => r.json())
      .then((newProduct) => onAddProduct(newProduct));
    setName("");
    setDesc("");
  }

  return (
    <form onSubmit={addToForm} className="addToCart-form">
      <div className="form-container">
        <input
          type="text"
          name="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value.toUpperCase())}
          placeholder="QTY?"
          required
          className="addToCart-desc"
        />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value.toUpperCase())}
          placeholder="PRODUCT?"
          required
          className="addToCart-name"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="addToCart-options"
        >
          <option value="Dairy">DAIRY</option>
          <option value="Dessert">DESSERT</option>
          <option value="Meat">MEAT</option>
          <option value="Misc">MISC</option>
          <option value="Produce">PRODUCE</option>
          <option value="Snacks">SNACKS</option>
        </select>

        <button type="submit" className="addToCart-button">
          ADD TO LIST
        </button>
      </div>
    </form>
  );
}

export default AddProductForm;
