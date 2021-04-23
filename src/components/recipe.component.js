import React, { Component } from "react";
import { connect } from "react-redux";
import { updateRecipe, deleteRecipe } from "../actions/recipeActions";
import RecipeDataService from "../API_Services/CRUD_Recipe_Services";

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeIngredients = this.onChangeIngredients.bind(this);
        this.onChangeDirections = this.onChangeDirections.bind(this);
        this.getRecipe = this.getRecipe.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.removeRecipe = this.removeRecipe().bind(this);

        this.state = {
            currentRecipe: {
                _id: null,
                name: "",
                ingredients: [],
                directions: "",
                published: false,
            },
            message: "",
        };
    }

    componentDidMount() {
        this.getRecipe(this.props.match.params.id);
    }

    onChangeName(e) {
        const name = e.target.value;

        this.setState(function (prevState) {
            return {
                currentRecipe: {
                    ...prevState.currentRecipe,
                    name: name,
                },
            };
        });
    }

    onChangeIngredients(e) {
        const ingredients = e.target.value;

        this.setState(function (prevState) {
            return {
                currentRecipe: {
                    ...prevState.currentRecipe,
                    ingredients: ingredients,
                },
            };
        });
    }

    onChangeDirections(e) {
        const directions = e.target.value;

        this.setState((prevState) => ({
            currentRecipeBook: {
                ...prevState.currentRecipe,
                directions: directions,
            },
        }));
    }

    getRecipe(id) {
        RecipeDataService.get(id)
            .then((response) => {
                this.setState({
                    currentRecipe: response.data,
                });
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    updateStatus(status) {
        let data = {
            _id: this.state.currentRecipe._id,
            name: this.state.currentRecipe.name,
            ingredients: this.state.currentRecipe.ingredients,
            description: this.state.currentRecipe.description,
        };

        this.props
            .updateRecipe(this.state.currentRecipe._id, data)
            .then((response) => {
                console.log(response);

                this.setState((prevState) => ({
                    currentRecipe: {
                        ...prevState.currentRecipe,
                        published: status,
                    },
                }));

                this.setState({ message: "The status was updated successfully!" });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    updateContent() {
        this.props
            .updateRecipe(this.state.currentRecipe._id, this.state.currentRecipe)
            .then((response) => {
                console.log(response);

                this.setState({ message: "The recipe was updated successfully!" });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    removeRecipe() {
        this.props
            .deleteRecipe(this.state.currentRecipe._id)
            .then(() => {
                this.props.history.push("/recipes");
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {
        const { currentRecipe } = this.state;

        return (
            <div>
                {currentRecipe ? (
                    <div className="edit-form">
                        <h4>Recipe</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={currentRecipe.name}
                                    onChange={this.onChangeName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ingredients">Ingredients</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="ingredients"
                                    value={JSON.stringify(currentRecipe.ingredients)}
                                    onChange={this.onChangeIngredients}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="directions">Directions</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="directions"
                                    value={currentRecipe.directions}
                                    onChange={this.onChangeDirections}
                                />
                            </div>
                        </form>



                        <button
                            className="badge badge-danger mr-2"
                            onClick={this.removeRecipe}
                        >
                            Delete
                        </button>

                        <button
                            type="submit"
                            className="badge badge-success"
                            onClick={this.updateContent}
                        >
                            Update
                        </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a Recipe...</p>
                    </div>
                )}
            </div>
        );
    }
}

export default connect(null, { updateRecipe, deleteRecipe })(Recipe);