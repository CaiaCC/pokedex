import React, { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from "./components/Navbar";
import Info from "./components/Info";

const App = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonData, setPokemonData] = useState({});
    const [pokemonType, setPokemonType] = useState("");

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/ditto")
            .then((response) => {
                setPokemonType(response.data.types[0].type.name);
                setPokemonData(response.data);
            });
    }, [])

    const getPokemon = async () => {
        try {
            const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
            const response = await axios.get(URL);

            setPokemonType(response.data.types[0].type.name);
            setPokemonData(response.data);
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleChange = (e) => {
        setPokemonName(e.target.value.toLowerCase());
    };

    const onSubmit = (e) => {
        e.preventDefault();

        getPokemon();
        setPokemonName("");
    };

    return (
        <div className="app">
            <Navbar
                handleChange={handleChange}
                onSubmit={onSubmit}
                pokemonName={pokemonName}
            />
            <Info pokemonData={pokemonData} pokemonType={pokemonType} />
        </div>
    );
};

export default App;
