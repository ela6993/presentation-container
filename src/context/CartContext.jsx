import { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, number: cartItem.number + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, number: 1 }];
            }
        });
    };

    const removeFromCart = (item) => {
        setCart(prevCart => {
            return prevCart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, number: Math.max(cartItem.number - 1, 0) }
                    : cartItem
            ).filter(cartItem => cartItem.number > 0);
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalCost = useMemo(() => {
        return cart.reduce((sum, item) => sum + item.price * item.number, 0);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalCost }}>
            {children}
        </CartContext.Provider>
    );
};
