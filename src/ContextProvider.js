import React, { createContext, useState } from 'react';

export const FavuoriteThemeContext = createContext();

export const FavuoriteThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); 
    const [movie, setCart] = useState([])

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    const addToCart = (product) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, count: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === productId);
            if (existingProduct.count > 1) {
                return prevCart.map(item =>
                    item.id === productId
                        ? { ...item, count: item.count - 1 }
                        : item
                );
            } else {
                return prevCart.filter(item => item.id !== productId);
            }
        });
    };

    const getTotalItems = () => {
        return movie.reduce((total, item) => total + item.count, 0);
    };

    return (
        <FavuoriteThemeContext.Provider value={{
            theme,
            toggleTheme,
            movie,
            addToCart,
            removeFromCart,
            getTotalItems,
        }}>
            {children}
        </FavuoriteThemeContext.Provider>
    );
};
