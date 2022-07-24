import React from 'react';
import './NavBar';

const NavBar = () => {
    return (
        <div>
            <ul>
                <li>Home</li>
                <li className='push'>Admin</li>
            </ul>
        </div>
    );
}



export default NavBar;