import React, {Component} from 'react'
import './Movie.css';

class Movie extends Component{
    render(){
        return (
            <div className="Movie">
            <h1>극한 직업</h1>
            <img src="http://www.chungju2019.com/upload/bbs/00000005/2019/15513169420.jpg" alt=""></img>
            </div>
        );
    }
}

export default Movie;