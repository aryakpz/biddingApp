import React, { ChangeEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import { Product_list } from "../Data/Product";
import './home.css'
import { UserClick } from "../components/userclick";
import { User_list } from "../Data/User";

export const SingleProduct = () => {
    const [input, setinput] = useState("")
    const loc = useLocation()
    const { id, uid } = loc.state || {}
    const item = Product_list.find(item => item.id === id)
    const userid = User_list.find(user => user.id === uid)
    if (!item || !userid) {
        return ("Something went wrong");
    }

    const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
        setinput(e.target.value)

    }
    const handleclick = () => {
        console.log(input)
    }
    return (
        <>
            <UserClick />
            <div className="accountuser">
                <span>Account User : {userid.name}</span>
            </div >
            <div className="singelview">
                <div className="items single">
                    <div className="datasec single">
                        <span className="brand">{item.brand}</span>
                        <span className="name">{item.name}</span>
                        <img src={item.img} alt=" product image" className="singleimage"
                        />
                        <span className="amount"><p> Start bid amount: </p>
                            ₹ {item.amount}</span>
                        <span className="current"><p>Current bid amount :</p> ₹ {item.bid_amount}</span>
                        <div className="bidselection"> <input placeholder="Enter your amount : " onChange={handlechange}></input>
                            <button onClick={handleclick}>Post</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

