import React, { useState, useEffect } from "react";
import { Product } from "../types/product";
import { CartProps } from "../types/cart";

function WithCart<P extends CartProps>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithCartComponent(props: Omit<P, keyof CartProps>) {
    const [cartItems, setCartItems] = useState<Product[]>(() => {
      const storedItems = localStorage.getItem("cartItems");
      return storedItems ? JSON.parse(storedItems) : [];
    });

    useEffect(() => {
      console.log("adicionou");
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product: Product) => {
      const existingProduct = cartItems.find((item) => item.id === product.id);
      if (!existingProduct) {
        setCartItems((prevItems) => [...prevItems, product]);
      } else {
        alert("Este produto já está no carrinho!");
      }
    };

    const removeFromCart = (id: number) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const cartCount = cartItems.length;

    return (
      <WrappedComponent
        {...(props as P)}
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartCount={cartCount}
      />
    );
  };
}

export default WithCart;
