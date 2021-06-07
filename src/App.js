import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
} from "react-router-dom";
import axios from 'axios';
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Lists from "./components/Lists";

const App = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonData, setPokemonData] = useState({});
    const [pokemonType, setPokemonType] = useState("");
    let history = useHistory();

    const getPokemon = async () => {
        try {
            const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
            const response = await axios.get(URL);

            setPokemonType(response.data.types[0].type.name);
            setPokemonData(response.data);
            history.push("/info");
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
            <Router history={history}>
                <Navbar
                    handleChange={handleChange}
                    onSubmit={onSubmit}
                    pokemonName={pokemonName}
                />
                <Switch>
                    <Route path="/info">
                        <Info
                            pokemonData={pokemonData}
                            pokemonType={pokemonType}
                        />
                    </Route>
                    <Route path="/">
                        <Lists onSubmit={onSubmit} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
