import React from 'react'
import './topBar.css'
import {Link} from 'react-router-dom'; 

function TopBar() {
    return (
        <>
            <div className='topBar'>
                <nav className='nav'>
                    <ul className='unorderedListHeader'>
                        <li className='listHeader'><Link to='/' className='link'>Home</Link></li>
                        <li className='listHeader'><Link to='/about' className='link' >About</Link></li>
                        <li className='listHeader'><Link to='/gallery' className='link'>Gallery</Link></li>
                        <li className='listHeader'><Link to='/blog' className='link'>Blog</Link></li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default TopBar