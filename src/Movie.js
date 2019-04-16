import React, {Component} from 'react'
import './Movie.css';
import propTypes from 'prop-types'

class Movie extends Component{

    static propTypes={
        title : propTypes.string.isRequired,
        poster: propTypes.string.isRequired
    }

    render(){
        return (
            <div className="Movie">
            <h1>{this.props.title}</h1>
            <MoviePoster image={this.props.poster}/>
            </div>
        );
    }
}

class MoviePoster extends Component{
    render(){
        return (
            <img src={this.props.image} alt=""></img>
        );
    }
}

export default Movie;