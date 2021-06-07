import React from 'react';
import './Navbar.css'

const Navbar = ({ handleChange, onSubmit, pokemonName }) => {
    return (
        <div className="navbar">
            <h1>PokePedia</h1>
            <form>
                <input
                    type="text"
                    placeholder="Enter a Pokemon's name"
                    onChange={handleChange}
                    value={pokemonName || ""}
                />
                <button type="submit" onClick={onSubmit} />
            </form>
        </div>
    );
};

export default Navbar;
