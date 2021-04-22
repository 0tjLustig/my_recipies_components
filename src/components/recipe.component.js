import React, { Component } from "react";
import { connect } from "react-redux";
import { updateRecipe, deleteRecipe } from "../actions/recipeActions";
import RecipeDataService from "../API_Services/CRUD_Recipe_Services";

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.getRecipe = this.getRecipe.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.removeRecipe = this.removeRecipe().bind(this);

        this.state = {
            currentRecipe: {
                id: null,
                name: "",
                description: "",
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

    onChangeDescription(e) {
        const description = e.target.value;

        this.setState((prevState) => ({
            currentRecipeBook: {
                ...prevState.currentRecipe,
                description: description,
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
        var data = {
            id: this.state.currentRecipe.id,
            name: this.state.currentRecipe.name,
            description: this.state.currentRecipe.description,
            published: status,
        };

        this.props
            .updateRecipe(this.state.currentRecipe.id, data)
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
            .updateRecipe(this.state.currentRecipe.id, this.state.currentRecipe)
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
            .deleteRecipe(this.state.currentRecipe.id)
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
                                    id="title"
                                    value={currentRecipe.name}
                                    onChange={this.onChangeName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    value={currentRecipe.description}
                                    onChange={this.onChangeDescription}
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    <strong>Status:</strong>
                                </label>
                                {currentRecipe.published ? "Published" : "Pending"}
                            </div>
                        </form>

                        {currentRecipe.published ? (
                            <button
                                className="badge badge-primary mr-2"
                                onClick={() => this.updateStatus(false)}
                            >
                                UnPublish
                            </button>
                        ) : (
                            <button
                                className="badge badge-primary mr-2"
                                onClick={() => this.updateStatus(true)}
                            >
                                Publish
                            </button>
                        )}

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