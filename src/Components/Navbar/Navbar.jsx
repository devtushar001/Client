import React, { useState } from "react";
import { assets } from "../../Assets/Assets";
import { MdChecklistRtl } from "react-icons/md";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { IoIosAdd } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineLogin } from "react-icons/ai";
import './Navbar.css';

export const Navbar = () => {
    const [login, setLogin] = useState(false)
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src={assets.logoTwo} alt="" />
                </div>
                <div className="dropdown">
                    <div className="checklist menu-list">
                        <MdChecklistRtl size={50} />
                        <span>Check List</span>
                    </div>
                    <div className="update-stock menu-list">
                        <CgArrowsExchangeAlt size={50} />
                        <span>Update Stock</span>
                    </div>
                    <div className="add-new-item menu-list">
                        <IoIosAdd size={50} />
                        <span>Add Items</span>
                    </div>
                    {login ? <div className="signup menu-list">
                        <FaRegUser size={50} />
                        <span>User Id</span>
                    </div> : <div className="login menu-list">
                        <AiOutlineLogin size={50} />
                        <span>Sign In</span>
                    </div>}
                </div>
            </div>
        </>
    )
}