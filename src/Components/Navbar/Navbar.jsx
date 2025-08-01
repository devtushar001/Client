import React, { useState } from "react";
import { assets } from "../../Assets/Assets";
import { MdChecklistRtl } from "react-icons/md";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { IoIosAdd } from "react-icons/io";
import { RiUser6Line } from "react-icons/ri";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";
import './Navbar.css';

export const Navbar = () => {
    const [login, setLogin] = useState(false);

    return (
        <div className="navbar">
            {/* Logo */}
            <div className="logo">
                <img src={assets.logoTwo} alt="Logo" />
            </div>

            {/* Menu Links */}
            <div className="dropdown">
                <Link to="/checklist" className="menu-list link">
                    <MdChecklistRtl className="icons" />
                    <span>Check List</span>
                </Link>

                <Link to="/update-stock" className="menu-list link">
                    <CgArrowsExchangeAlt className="icons" />
                    <span>Update Stock</span>
                </Link>

                <Link to="/add-item" className="menu-list link">
                    <IoIosAdd className="icons" />
                    <span>Add Items</span>
                </Link>

                {login ? (
                    <Link to="/my-profile" className="menu-list link">
                        <RiUser6Line className="icons" />
                        <span>User ID</span>
                    </Link>
                ) : (
                    <Link to="/sign-up" onClick={() => setLogin(true)} className="menu-list link">
                        <AiOutlineLogin className="icons" />
                        <span>Sign In</span>
                    </Link>
                )}
            </div>
        </div>
    );
};
