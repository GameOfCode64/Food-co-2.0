import { useState, useEffect } from "react";

export const useCartCount = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCount(storedCart.length);
    };

    updateCartCount(); // Initial count update
    window.addEventListener("storage", updateCartCount); // Listen for storage changes

    return () => {
      window.removeEventListener("storage", updateCartCount); // Cleanup listener
    };
  }, []);

  return count;
};
