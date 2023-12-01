import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

export default function Header() {
    return (
        <div id='header'>
            <div className='headerMain'>
                <div id='logo'>
                    <Link>
                        <img src="../src/images/Shop Logo.png" />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link className='home'> Home </Link>
                    </li>
                    <li>
                        <Link className='about'> About </Link>
                    </li>
                    <li>
                        <Link className='pages'> Pages </Link>
                    </li>
                    <li>
                        <Link className='blog'> Blog </Link>
                    </li>
                    <li>
                        <Link className='contact'> Contact </Link>
                    </li>
                </ul>
                <div id='login'>
                    <img src="../src/images/User.png" />
                </div>
            </div>
        </div>
    )
}
