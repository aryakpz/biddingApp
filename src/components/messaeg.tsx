import React from "react";
import { useProductContext } from "./BidContext";

export const Notification: React.FC = () => {
    const { notifications } = useProductContext();
    console.log("fernerj")
    return (
        <div className="notifications">
            {notifications.map((notification) => (
                <div className="notification">
                    {notification.message}
                </div>
            ))}
        </div>
    )
}