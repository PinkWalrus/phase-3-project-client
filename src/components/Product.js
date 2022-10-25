import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

function Product({ product, onUpdateProduct, onDeleteProduct }) {
  function addToCart() {
    fetch(`http://localhost:9292/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        isInCart: !product.isInCart,
      }),
    })
      .then((r) => r.json())
      .then((updatedProduct) => onUpdateProduct(updatedProduct));
  }

  function deleteProduct() {
    fetch(`http://localhost:9292/products/${product.id}`, {
      method: "DELETE",
    });
    onDeleteProduct(product);
  }

  return (
    <div>
      <li className={product.isInCart ? "in-cart" : ""}>
        <div>
          <span>{product.desc} </span>
          <span>{product.name}</span>
        </div>
        <button className="button-container">
          <button
            onClick={addToCart}
            className={product.isInCart ? "remove" : "add"}
          >
            {product.isInCart ? (
              <RemoveCircleOutlineOutlinedIcon
                style={{
                  color: "white",
                  border: "none",
                }}
              />
            ) : (
              <AddCircleOutlineOutlinedIcon
                style={{
                  color: "white",
                  border: "none",
                }}
              />
            )}
          </button>
          <button onClick={deleteProduct} className="remove">
            <HighlightOffOutlinedIcon
              style={{
                color: "white",
                border: "none",
              }}
            />
          </button>
        </button>
      </li>
    </div>
  );
}

export default Product;
