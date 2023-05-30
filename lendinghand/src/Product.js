import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [quantity, setQuantity] = useState(1);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        quantity: quantity,
      },
    });

    toast.success(
      `${title} (Quantity: ${quantity}) has been added to the cart`,
      {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          Ratings :
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>

      <img className="image-box" src={image} alt="" />

      <div className="product__quantity">
        <label htmlFor={`quantity_${id}`}>Quantity :</label>
        <input
          type="number"
          id={`quantity_${id}`}
          min={1}
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
