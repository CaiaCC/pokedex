import React from 'react';
import {Link} from 'react-router-dom';
import "./Lists.css";

const ListItem = ({ name, imageURL }) => {
    return (
        <Link to="/info">
            <div className="listItem" onclick={onsubmit}>
                <img src={imageURL} alt={name} />
                <h2>{name}</h2>
            </div>
        </Link>
    );
};

export default ListItem;
