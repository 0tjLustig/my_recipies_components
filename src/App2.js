import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddRecipeBook from "./components/add-recipeBook.component";
import RecipeBook from "./components/recipeBook.component";
import RecipeBooksList from "./components/recipeBooks-list.component";

class App2 extends Component {
    render() {
        return (
            <Router>
                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/recipeBooks"]} component={RecipeBooksList} />
                        <Route exact path="/add" component={AddRecipeBook} />
                        <Route path="/recipeBooks/:id" component={RecipeBook} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App2;
