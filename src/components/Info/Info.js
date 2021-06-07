import React from 'react';
import './Info.css';

const Info = ({ pokemonData, pokemonType }) => {
    const { name, height, weight, abilities, stats, sprites } = pokemonData;
    const type = pokemonType;

    return (
        <div className="info">
            <h2>{name}</h2>
            <div className="info__container">
                <div className="info__image">
                    <img
                        src={sprites?.front_default}
                        alt={`${name} front image`}
                    />
                    <img
                        src={sprites?.front_shiny}
                        alt={`${name} front image`}
                    />
                    <img
                        src={sprites?.back_default}
                        alt={`${name} back image`}
                    />
                    <img src={sprites?.back_shiny} alt={`${name} back image`} />
                </div>
                <div className="info__content">
                    <div className="info__content__basic">
                        <p>Height: {height}"</p>
                        <p>Weight: {weight} lb</p>
                        <p>Type: {type}</p>
                        <p>Abilities: </p>

                        {abilities?.map((item, i) => (
                            <p
                                key={i}
                                className="info__content__basic__ability"
                            >
                                {item.ability.name}
                            </p>
                        ))}

                    </div>
                    <div className="info__content__stats">

                        {stats?.map((item, i) => (
                            <p key={i}>
                                {item.stat.name}: {item.base_stat}
                            </p>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
