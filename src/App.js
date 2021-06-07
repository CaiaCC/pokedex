import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";


const App = () => {
    const history = useHistory();

    return (
        <Router history={history}>
            <div className="app">
                <Switch>
                    <Route></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
