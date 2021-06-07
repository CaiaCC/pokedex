import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Lists.css";
import { CircularProgress } from "@material-ui/core";
import ListItem from "./ListItem";

const Lists = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=898`)
            .then((response) => {
                const { results } = response.data;
                const newData = {};
                results.forEach((pokemon, index) => {
                    newData[index + 1] = {
                        id: index + 1,
                        name: pokemon.name,
                        imageURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                            index + 1
                        }.png`,
                    };
                });
                setData(newData);
            });
    }, []);

    return (
        <div className="lists">
            {data ? (
                <div className="lists__container">
                    {Object.keys(data).map((pokemonId) => (
                        <ListItem
                            key={pokemonId}
                            id={pokemonId}
                            name={data[pokemonId].name}
                            imageURL={data[pokemonId].imageURL}
                        />
                    ))}
                </div>
            ) : (
                <CircularProgress />
            )}
        </div>
    );
}

export default Lists;
