
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Products } from '../Data/Product';
// import { productProps } from '../Types/type';
// import { UserList } from '../Data/User';

type Product = {
    id: number;
    name: string;
    brand: string;
    amount: number;
    bid_amount: number;
    img: string;
} 

type Notification = {
    message: string;
}

type ProductContextType = {
    products: Product[];
    updateBidAmount: (productId: number, newBidAmount: number, name: string) => void;
    notifications: Notification[];
}

const ProductContext = createContext<ProductContextType | null>(null);
export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [products, setProducts] = useState<Product[]>(() => {
        const storedProducts = localStorage.getItem('products');
        return storedProducts ? JSON.parse(storedProducts) : Products;
    });

    const [notifications, setNotifications] = useState<Notification[]>(() => {
        const storeNotifcation = localStorage.getItem('notifications');
        return storeNotifcation ? JSON.parse(storeNotifcation) : []
    });

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    useEffect(() => {
        localStorage.setItem('notifications', JSON.stringify(notifications))
    }, [notifications])

    const updateBidAmount = (productId: number, newBidAmount: number, name: string) => {
        setProducts(prevProducts => {
            const updatedProducts = prevProducts.map(product => {
                if (product.id === productId) {
                    setNotifications(prev => {
                        const messages = prev.filter(
                            notification => !notification.message.includes(product.name)
                        );
                        return [
                            ...messages,
                            {
                                message: `${name} placed the bid of ₹${newBidAmount} on ${product.name}`
                            }
                        ];
                    });
                    return { ...product, bid_amount: newBidAmount };
                }
                return product;
            });
            return updatedProducts;
        });
    };

    return (
        <ProductContext.Provider value={{ products, updateBidAmount, notifications }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext)
    if (!context) {
        throw new Error("Something went wrong!")
    }
    return context;
}