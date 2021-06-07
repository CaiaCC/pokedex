import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';


const App = () => {
    const history = useHistory();

    return (
        <Router history={history}>
            <div className="app">
                <Navbar />
                <Switch>
                    <Route></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
