
import React from "react";
import { UserList } from "../Data/User";
import './home.css';
import { useNavigate } from "react-router-dom";
import userlogo from '../images/user-solid.svg'

export const Home = () => {
    const navigate = useNavigate();
    const handleclick = (id: number, name: string) => {
        navigate('/productlist', { state: { id: id, name: name } });
    };

    return (
        <div className="userlist">
            <h2>Get Start With Your Account</h2>
            {UserList.map((list) => (
                <div className="user" onClick={() => handleclick(list.id, list.name)} key={list.id}>
                    <img src={userlogo}/>{list.name}</div>
            ))}
        </div>
    );
};

           