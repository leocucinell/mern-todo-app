import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../components/Home/Home";
import TodoContainer from "../components/TodoContainer/TodoContainer";

function Routes() {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path="/todos" component={TodoContainer}/>
        </Switch>
    );
}

export default Routes;