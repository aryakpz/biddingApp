import React from "react";
import { useNavigate } from "react-router-dom";
export const UserClick = () => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(-1)} className="backbutton">Back</div >
    )
}
