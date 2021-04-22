import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddRecipe from "./components/add-recipe.component";
import Recipe from "./components/recipe.component";
import RecipesList from "./components/recipes-list.component";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/recipes"]} component={RecipesList} />
                        <Route exact path="/add" component={AddRecipe} />
                        <Route path="/recipes/:id" component={Recipe} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
