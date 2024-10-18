import React from "react";
import { Product_list } from "../Data/Product";
import './home.css'
import { UserClick } from "../components/userclick";
import { useLocation, useNavigate } from "react-router-dom";
import { User_list } from "../Data/User";
export const Product_Page = () => {

    const nav = useNavigate()
    const handleclick = (id: number, uid: number) => {
        nav('/singleproduct', { state: { id: id, uid: user?.id } })
    }
    const loc = useLocation()
    const { id } = loc.state || {}
    const user = User_list.find(user => user.id === id)
    if (!user) {
        return <>no user</>
    }
    
    return (
        <>
            <UserClick />
            <div className="accountuser">
                <span>Account User : {user.name}</span>
            </div >
            <div className="productdiv">

                {Product_list.map((item) => (
                    <div className="items">
                        <div className="datasec">
                            <span className="brand">{item.brand}</span>
                            <span className="name">{item.name}</span>
                            <span className="amount"><p> Start bid amount: </p>
                                ₹ {item.amount}</span>
                            <span className="current"><p>Current bid amount :</p> ₹ {item.bid_amount}</span>
                            <button onClick={() => { handleclick(item.id, user.id) }}>Start</button >
                        </div>
                        <div className="imagesec">
                            <img src={item.img} alt=" product image" />
                        </div>
                    </div >
                ))
                }
            </div >
        </>
    )
}

