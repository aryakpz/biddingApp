// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { ProductList } from '../Data/Product';
// import { productProps } from '../Types/type';

// type Product = {
//     id: number;
//     name: string;
//     brand: string;
//     amount: number;
//     bid_amount: number;
//     img: string;
// }

// type Notification = {
//     message: string;
//     timestamp: number;
// }

// type ProductContextType = {
//     products: Product[];
//     updateBidAmount: (productId: number, newBidAmount: number, name: string) => void;
//     notifications: Notification[];
// }

// const ProductContext = createContext<ProductContextType | null>(null)

// export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

//     const [products, setProducts] = useState<Product[]>(() => {
//         const storedProducts = localStorage.getItem('products');
//         return storedProducts ? JSON.parse(storedProducts) : ProductList;
//     });
//     const [notifications, setNotifications] = useState<Notification[]>([]);

//     useEffect(() => {
//         localStorage.setItem('products', JSON.stringify(products));
//     }, [products]);

//     const updateBidAmount = (productId: number, newBidAmount: number, name: string) => {
//         setProducts(prevProducts => {
//             const updatedProducts = prevProducts.map(product => {
//                 if (product.id === productId) {
//                     if (newBidAmount > product.bid_amount) {
//                         setNotifications(prev => [
//                             ...prev,
//                             {
//                                 message: `User ${name} bid ₹${newBidAmount} on ${product.name}`,
//                                 timestamp: Date.now(),
//                             },
//                         ]);
//                         return { ...product, bid_amount: newBidAmount };
//                     }
//                 }
//                 return product;
//             });
//             return updatedProducts;
//         });
//     };

//     return (
//         <ProductContext.Provider value={{ products, updateBidAmount, notifications }}>
//             {children}
//         </ProductContext.Provider>
//     );
// };

// export const useProductContext = () => {
//     const context = useContext(ProductContext);
//     if (!context) {
//         throw new Error("useProductContext must be used within a ProductProvider");
//     }
//     return context;
// };



import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProductsList } from '../Data/Product';
import { productProps } from '../Types/type';

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
    timestamp: number;
}

type ProductContextType = {
    // product: Product[];
    productItem:Product[]
    updateBidAmount: (productId: number, newBidAmount: number, name: string) => void;
    notifications: Notification[];
}

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [productItem, setProducts] = useState<Product[]>(() => {
        const storedProducts = localStorage.getItem('products');
        return storedProducts ? JSON.parse(storedProducts) : ProductsList;
    });
    const [notifications, setNotifications] = useState<Notification[]>(() => {
        const storeNotifcation = localStorage.getItem('notifications');
        return storeNotifcation ? JSON.parse(storeNotifcation) : []

    });

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(productItem));
    }, [productItem]);

    useEffect(() => {
        localStorage.setItem('notifications', JSON.stringify(notifications))
    }, [notifications])

    const updateBidAmount = (productId: number, newBidAmount: number, name: string) => {
        setProducts(prevProducts => {
            const updatedProducts = prevProducts.map(product => {
                if (product.id === productId) {
                    if (newBidAmount > product.bid_amount) {
                        setNotifications(prev => [
                            ...prev,
                            {
                                message: `User ${name} placed the highest bid of ₹${newBidAmount} on ${product.name}`,
                                timestamp: Date.now(),
                            },
                        ]);
                        return { ...product, bid_amount: newBidAmount };
                    }
                }
                return product;
            });
            return updatedProducts;
        });
    };

    return (
        <ProductContext.Provider value={{ productItem, updateBidAmount, notifications }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProductContext must be used within a ProductProvider");
    }
    return context;
};
