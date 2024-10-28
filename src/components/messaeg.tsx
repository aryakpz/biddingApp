
import React, { useState } from "react";
import { useProductContext } from "./BidContext";

export const BidMessage:React.FC=()=>{
    const {notifications} =useProductContext()
    const [show,setShow]=useState(false)

    const handleclick=()=>{
        setShow(prev => !prev)
    }
    return(
        <div className="notifications">
            <button onClick={()=>handleclick()}>Bid Message</button>
            {show && (
                <div className="notification">
                  {notifications.map((notification)=>(
                   <p>{notification.message}</p>
                  ))}
                </div>
            )}
        </div>
    )
}