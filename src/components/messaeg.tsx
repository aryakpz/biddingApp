

// import React, { useState } from 'react';
// import { useProductContext } from './BidContext';

// export const BidMessage: React.FC = () => {
//     const { notifications } = useProductContext();
//     const [showMessages, setShowMessages] = useState(false); 
//     const handleClick = () => {
//         setShowMessages(prev => !prev);
//     };

//     return (
//         <div className='notifications'>
//             <button onClick={handleClick}>Bid Messages</button>

//             {showMessages && (
//                 <ul>
//                     {notifications.map((notification, index) => (
//                         <li key={index}>{notification.message}</li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };



import React, { useState } from "react";
import { ProductProvider, useProductContext } from "./BidContext";


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