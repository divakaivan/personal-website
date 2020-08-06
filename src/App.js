import React from 'react';
import Header from "./components/Header";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
