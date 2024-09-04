import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-gradient-to-r from-[#87ADB0] to-blue-100 ...">
                <div className="flex-1">
                    <Link to={"/"} className="btn btn-ghost text-xl">E Commerce</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Sign in</a></li>
                        <li><a>Log out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header