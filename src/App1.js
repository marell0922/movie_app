import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {
    state = {
        greeting : 'Good Morning',
        movies : [
            {title : '생일', poster:'https://movie-phinf.pstatic.net/20190329_223/1553847778414CTAcF_JPEG/movie_image.jpg?type=m665_443_2'},
            {title : '헬보이', poster:'https://movie-phinf.pstatic.net/20190404_205/155434484507891fje_JPEG/movie_image.jpg?type=m665_443_2'},
            {title : '샤잠!', poster:'https://movie-phinf.pstatic.net/20190322_198/1553220632606va06v_JPEG/movie_image.jpg?type=m665_443_2'},
            {title : '미성년', poster:'https://movie-phinf.pstatic.net/20190411_137/1554973943268Tu8fN_JPEG/movie_image.jpg?type=m665_443_2'},
            {title : '극한직업', poster:'http://www.chungju2019.com/upload/bbs/00000005/2019/15513169420.jpg'}
          ]
    }
  componentWillMount(){
    console.log('componentWillMount() is called');
  }

  componentDidMount(){
    console.log('componentDidMount() is called');
    setTimeout((i,j)=>{
        //side effect  - 함수내에서는 외부에서 전달되는 param외에는 외부로 접근 x
        //this.state.greeting='Good Afternoon';
        this.setState({
            greeting : 'Good Afternoon',
            // movies : this.state.movies.concat([
            //     {title : '덤보', poster:'https://movie-phinf.pstatic.net/20190328_112/1553762886182QHDpG_JPEG/movie_image.jpg?type=m665_443_2'}
            // ])
            movies : [
                ...this.state.movies, {
                    title : '덤보', 
                    poster:'https://movie-phinf.pstatic.net/20190328_112/1553762886182QHDpG_JPEG/movie_image.jpg?type=m665_443_2'
                }
            ]
        });
    }, 5000);
  }

  render() {
      console.log('render() is called');
    return (
    <div className="App">
        <h1>{this.state.greeting}</h1>
        {   
        this.state.movies.map((movie, index)=>
            <Movie title={movie.title} poster={movie.poster}/>
            )
        }
    </div>
     
    );
  }
}

export default App;
