import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// const movieTitles=["생일","헬보이","샤잠!","미성년", "극한직업"];

const movies = [
  {title : '생일', poster:'https://movie-phinf.pstatic.net/20190329_223/1553847778414CTAcF_JPEG/movie_image.jpg?type=m665_443_2'},
  {title : '헬보이', poster:'https://movie-phinf.pstatic.net/20190404_205/155434484507891fje_JPEG/movie_image.jpg?type=m665_443_2'},
  {title : '샤잠!', poster:'https://movie-phinf.pstatic.net/20190322_198/1553220632606va06v_JPEG/movie_image.jpg?type=m665_443_2'},
  {title : '미성년', poster:'https://movie-phinf.pstatic.net/20190411_137/1554973943268Tu8fN_JPEG/movie_image.jpg?type=m665_443_2'},
  {title : '극한직업', poster:'http://www.chungju2019.com/upload/bbs/00000005/2019/15513169420.jpg'}
];

//
// life cycle
//
// render : componentWillMount() => render()=> componentDidMount()
// update : componentWillRecieveProps() => componentShouldUpdate() => componentWill
//                                         return (oldProps != newProps)


class App extends Component {

  componentWillMount(){
    //request api
    console.log('componentWillMount() is called');
  }

  componentDidMount(){
    //request done
    console.log('componentDidMount() is called');
  }

  render() {
    return (<div className="App">
    {
      movies.map((e, i)=>
      <Movie key={i} title={e.title} poster={e.poster}/>
      )
    }
    </div>
     
    );
  }
}

export default App;
