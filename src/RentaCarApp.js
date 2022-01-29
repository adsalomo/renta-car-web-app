import React from 'react';
import { NavBar } from './components/ui/NavBar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Main } from './components/main/Main';

export const RentaCarApp = () => {
    return <Router>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Main} />
            <Redirect to="/" />
        </Switch>
    </Router>
}