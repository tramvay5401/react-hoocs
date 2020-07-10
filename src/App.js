import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import {Home} from "./pages/Home"
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import {About} from "./pages/About";
import {Profile} from "./pages/Profile";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <div className="container pt-4">
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/about'} component={About}/>
                    <Route path={'/profile:name'} component={Profile}/>
                </Switch>
            </div>
        </BrowserRouter>

    );
}

export default App;
