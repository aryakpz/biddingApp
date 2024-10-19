
import React, { ChangeEvent, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserClick } from "../components/userclick";
import { useProductContext } from "../components/BidContext";
import { UserList } from "../Data/User";
import './home.css';

export const SingleProduct = () => {
    const { products, updateBidAmount } = useProductContext();
    const loc = useLocation();
    const { id, uid } = loc.state || {};
    const preBid = useRef<string>("")
    const item = products.find(item => item.id === id);
    const userId = UserList.find(user => user.id === uid);
    const [input, setInput] = useState("");
    if (!item || !userId) {
        return <div>Something went wrong</div>;
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        preBid.current = input
        setInput(e.target.value);
    };
    const handleClick = () => {
        const newAmount = parseFloat(input);
        const preAmount = parseFloat(preBid.current)
        if (!isNaN(newAmount) && newAmount > 0) {
            if (newAmount > preAmount) {
                updateBidAmount(item.id, newAmount, userId.name);
            }
            setInput("")
        }
        else {
            alert("Enter an amount greater than the current bid amount.");
        }
    };
    return (
        <> <div className="topsection">
            <UserClick />
            <span className="accountuser">Account User: {userId.name}</span>
        </div >

            <div className="singleview">
                <div className="items single">
                    <div className="datasec single">
                        <span className="brand">{item.brand}</span>
                        <span className="name">{item.name}</span>
                        <img src={item.img} alt="product image" className="singleimage" />
                        <span className="amount">
                            <p>Start bid amount:</p> ₹ {item.amount}
                        </span>
                        <span className="current">
                            <p>Current bid amount:</p> ₹ {item.bid_amount}
                        </span>
                        <div className="bidselection">
                            <input
                                type="number"
                                placeholder="Enter your amount:"
                                onChange={handleChange}
                                value={input}
                            />
                            <button onClick={handleClick}>Post Bid</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
