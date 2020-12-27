import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

function Nav() {
    return (
        <nav>
            <u1 className ='nav-links'>
                <Link className='link' to='/'>
                    <p>Home</p>
                </Link>
                <Link className='link' to='/about'>
                    <p>About</p>
                </Link>
                <Link className='link' to='/staff_and_leadership'>
                    <p>Staff / Leadership</p>
                </Link>
                <Link className='link' to='/ministries'>
                    <p>Ministries</p>
                </Link>
                <Link className='link' to='/events'>
                    <p>Events</p>
                </Link>
                <Link className='link' to='/supporters'>
                    <p>Supporters</p>
                </Link>
                <Link className='link' to='/pictures'>
                    <p>Pictures</p>
                </Link>
                <Link className='link' to='/connect'>
                    <p>Connect</p>
                </Link>
            </u1>
        </nav>
    );
    
}

export default Nav;