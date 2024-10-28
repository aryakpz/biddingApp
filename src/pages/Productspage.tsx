import React from "react";
import { UserList } from "../Data/User";
import './home.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useProductContext } from "../components/BidContext";
import { UserClick } from "../components/userclick";
import { BidMessage } from "../components/messaeg";


export const ProductPage = () => {
    const { products, notifications } = useProductContext();
    const nav = useNavigate();
    const loc = useLocation();
    const { id } = loc.state || {};
    const user = UserList.find(user => user.id === id);

    if (!user) {
        return <>No user found</>;
    }

    const handleClick = (productId: number, uid: number) => {
        nav('/singleproduct', { state: { id: productId, uid: uid } });
    };

    return (
        <>
            <div className="topsection">
                <UserClick />
                <BidMessage />
            </div >
            <div className="accountuser">
                <span>Account User: {user.name}</span>
                {/* {notifications.map((notification)=>(notification.message))} */}
            </div>

            <div className="productdiv">
                {products.map((item) => (
                    <div className="items" key={item.id}>
                        <div className="datasec">
                            <span className="brand">{item.brand}</span>
                            <span className="name">{item.name}</span>
                            <span className="amount"><p>Start bid amount:</p> ₹ {item.amount}</span>
                            <span className="current"><p>Current bid amount:</p> ₹ {item.bid_amount}</span>
                            <button onClick={() => handleClick(item.id, user.id)}>Start</button>
                        </div>
                        <div className="imagesec">
                            <img src={item.img} alt="product image" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}



