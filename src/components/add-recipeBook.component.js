import React, { Component } from "react";
import { connect } from "react-redux";
import { createRecipeBook } from "../actions/recipeBookActions";

class AddRecipeBook extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveRecipeBook = this.saveRecipeBook.bind(this);
        this.newRecipeBook = this.newRecipeBook.bind(this);

        this.state = {
            id: null,
            name: "",
            description: "",
            published: false,

            submitted: false,
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        });
    }

    saveRecipeBook() {
        const { name, description } = this.state;

        this.props
            .createRecipeBook(name, description)
            .then((data) => {
                this.setState({
                    id: data.id,
                    name: data.name,
                    description: data.description,
                    published: data.published,

                    submitted: true,
                });
                console.log(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    newRecipeBook() {
        this.setState({
            id: null,
            name: "",
            description: "",
            published: false,

            submitted: false,
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newRecipeBook}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                required
                                value={this.state.name}
                                onChange={this.onChangeName}
                                name="name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                name="description"
                            />
                        </div>

                        <button onClick={this.saveRecipeBook} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default connect(null, { createRecipeBook })(AddRecipeBook);