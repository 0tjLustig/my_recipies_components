import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min';
global.jQuery = require('jquery');
require('bootstrap');

const imgUrls = [
    "https://static8.depositphotos.com/1005629/806/i/600/depositphotos_8068134-stock-photo-pasta-with-olives-and-parsley.jpg",
    "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg",
    "https://cms.greenhouse.dotdash.com/thmb/1j1QaDeEQF5kF8dZJviRP18lNpE=/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__03__shellfish-stock-method-1-c458b5bb690d463b90de1ac8f36031f1.jpg",
    "https://restaurantden.com/wp-content/uploads/2017/09/pexels.jpg",
    "https://media.istockphoto.com/photos/healthy-fresh-rainbow-colored-fruits-and-vegetables-background-picture-id1208790371?b=1&k=6&m=1208790371&s=170667a&w=0&h=R4qYkIvPFpYDzGMnuNN8ecabLlzaB2PoYlBXw_6fqXo="
];

class Carousel extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            currentImageIndex: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render () {
        return (
            <div className="carousel">
                <Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
                <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
                <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
            </div>
        );
    }
}

const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
        className={ `slide-arrow ${direction}` }
        onClick={ clickFunction }>
        { glyph }
    </div>
);

const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className="image-slide" style={styles}></div>
    );
}

export default Carousel;