import React from 'react';
import "./Lists.css";

const ListItem = ({name, imageURL, id}) => {

    return (
        <div className="listItem">
            <img src={imageURL} alt={name} />
            <h2>{name}</h2>
        </div>
    );
};

export default ListItem;
