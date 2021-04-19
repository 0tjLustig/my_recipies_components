import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

function Navbar({logout}) {
    return (
        <nav className="nav flex-column bg-primary col-2 full-height-navbar">
            <a className="btn btn-primary navbar-btn" href="#">My Recipes</a>
            <a className="btn btn-primary navbar-btn" href="#">Shopping List</a>
            <a className="btn btn-primary navbar-btn" onClick={logout} href="#!">
                Logout
            </a>
        </nav>
    );
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);

