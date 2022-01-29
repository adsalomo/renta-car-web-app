import React from 'react';
import { NavBar } from './components/ui/NavBar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Main } from './components/main/Main';
import { CarNew } from './components/main/CarNew';

export const RentaCarApp = () => {
    return <Router>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/carNew" component={CarNew} />
            <Redirect to="/" />
        </Switch>
    </Router>
}