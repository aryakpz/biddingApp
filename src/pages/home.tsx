import React from "react";
import { User_list } from "../Data/User";
import './home.css'
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate()
    const user = User_list
    const handleclick = (id: number, name: string) => {
        navigate('/productlist', { state: { id: id, name: name } }) 
    }
    return (
        <div className="userlist">
            <h2>Get Start With Your Account</h2>
            {user.map((list) => (
                <div className="user" onClick={() => handleclick(list.id, list.name)} key={list.id}>{list.name}</div>
            ))
            }
        </div>
    )
}