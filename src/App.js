import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from "./components/Home";
import WorkExperience from "./components/WorkExperience";
import Extracurricular from "./components/Extracurricular";
import Education from "./components/Education";


function App() {
    const [darkMode, setDarkMode] = useState(getInitialMode);
    useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(darkMode))
    }, [darkMode]);

    function getInitialMode() {
        return JSON.parse(localStorage.getItem('dark'))
    }

    return (
        <div className={darkMode ? "dark-mode":"light-mode"}>
            <BrowserRouter>
                <div className="container pb-5">
                    <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/work" component={WorkExperience} />
                        <Route path="/extracurricular" component={Extracurricular} />
                        <Route path="/education" component={Education}/>
                        <Redirect to="/" />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
