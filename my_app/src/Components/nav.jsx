import React from 'react'
import '../Style/nav.css'
function Nav() {
    return (
        < div className='navbar'>           
                <img
                    className='logo'
                    src={require('../Imagen/nav-logo.png')}
                    alt='logo' />
           
          
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Menu</a> </li>
                    <li><a href='#'>Reservation</a></li>
                    <li><a href='#'>Order Online</a></li>
                    <li><a href='#'>Login</a></li>
                </ul>
          


        </div>

    );
}

export default Nav