import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
} from "react-router-dom";
import axios from 'axios';
import Navbar from "./components/Navbar/Navbar";
import Info from "./page/Info/Info";

const App = () => {
    const history = useHistory();
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonData, setPokemonData] = useState({});
    const [pokemonType, setPokemonType] = useState("");

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
        <Router history={history}>
            <div className="app">
                <Navbar
                    handleChange={handleChange}
                    onSubmit={onSubmit}
                    pokemonName={pokemonName}
                />
                <Switch>
                    <Route path={`/${pokemonName}`}>
                        <Info />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
