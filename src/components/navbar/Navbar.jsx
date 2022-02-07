import React from 'react';
import { BiSearch } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineBell, AiOutlineCaretDown } from "react-icons/ai";
import avatarImage from '../../assets/avatar.jpg';
import './navbar.scss';

export default function Navbar() {
    return (
        <nav>
            <div className="title">
                <h1>Dashboard</h1>
            </div>
            <div className="notification">
                <div className="date">
                    <AiOutlineCalendar />
                    <span>Jan 30, 2022</span>
                </div>
                <div className="icon">
                    <BiSearch />
                    <span>|</span>
                    <AiOutlineBell />
                    <span>|</span>
                    <div className="image">
                        <img src={avatarImage} alt="" />
                    </div>
                    <AiOutlineCaretDown />
                </div>
            </div>
        </nav>
    );
}
