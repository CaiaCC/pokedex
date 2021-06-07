import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>PokePedia</h1>
            <form>
                <input type="text" placeholder="Enter a Pokemon's className" onChange={}/>
                <button type="submit" onClick={}/>
            </form>
        </div>
    );
}

export default Navbar;
