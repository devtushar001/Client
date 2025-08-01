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
                    <MdChecklistRtl size={50} />
                    <span>Check List</span>
                </Link>

                <Link to="/update-stock" className="menu-list link">
                    <CgArrowsExchangeAlt size={50} />
                    <span>Update Stock</span>
                </Link>

                <Link to="/add-item" className="menu-list link">
                    <IoIosAdd size={50} />
                    <span>Add Items</span>
                </Link>

                {login ? (
                    <div className="menu-list signup">
                        <RiUser6Line size={50} />
                        <span>User ID</span>
                    </div>
                ) : (
                    <div onClick={() => setLogin(true)} className="menu-list login">
                        <AiOutlineLogin size={50} />
                        <span>Sign In</span>
                    </div>
                )}
            </div>
        </div>
    );
};
