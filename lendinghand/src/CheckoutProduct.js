import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const handleChangeQuantity = (e) => {
    const newQuantity = parseInt(e.target.value);
    dispatch({
      type: "UPDATE_QUANTITY",
      id: id,
      quantity: newQuantity,
    });
  };

  // Find the item in the basket based on the ID
  const itemInBasket = basket.find((item) => item.id === id);

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
        {itemInBasket && (
          <div className="checkoutProduct__quantity">
            <label htmlFor={`quantity-${id}`}>Quantity:</label>
            <input
              type="number"
              id={`quantity-${id}`}
              min="1"
              value={itemInBasket.quantity}
              onChange={handleChangeQuantity}
            />
          </div>
        )}
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
