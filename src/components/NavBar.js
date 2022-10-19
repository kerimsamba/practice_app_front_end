import React from "react"
import { Link } from "react-router-dom";
import './style/NavBar.css';
import DrumLooper from "./DrumLooper";

const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <Link to="/practiceitems" className="site-title">Practice Buddy</Link>
                <ul>
                    <li>
                        <DrumLooper />
                    </li>
                    <li>
                        <Link to="/practiceitems">Daily Practice</Link>
                    </li>

                    <li>
                        <Link to="/lowerpriorityitems">Extend Practice</Link>
                    </li>

                    <li>
                        <Link to="/review">Review All</Link>
                    </li>
                    <li>
                        <Link to="/addnew">Add New</Link>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default NavBar;