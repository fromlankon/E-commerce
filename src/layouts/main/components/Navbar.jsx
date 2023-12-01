import React, { useContext, useRef } from 'react'
import { BasketContext } from '../../../context/BasketContext'

export default function Navbar({ setQuery }) {

    const { basket } = useContext(BasketContext)
    const input = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(input.current.value);
    };

    return (
        <div id='navbar'>
            <nav>
                <form onSubmit={handleSubmit}>
                    <div className='search'>
                        <input type="text" placeholder='Search...' ref={input} />
                        <img src="../src/images/Search.png" alt="" />
                    </div>
                    <button type="submit"> Search </button>
                </form>
                <div className='navRight'>
                    <div id='wish'>
                        <i className="bi bi-heart"></i>
                    </div>
                    <div id='cart'>
                        <i className="bi bi-cart3"></i>
                        <span className='basketCount'> {basket.length} </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}
