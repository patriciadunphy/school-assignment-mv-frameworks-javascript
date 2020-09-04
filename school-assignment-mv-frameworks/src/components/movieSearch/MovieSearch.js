import React, { Component } from 'react';
import movieSearchResult from './movieSearchResult';


class MovieSearch extends Component{
    state = {
        movieSearchResult: ""
    }

    // componentDidMount(){
    //     // movieSearchResult.get(`${title}`)
    //     movieSearchResult.get("Avengers")
    //     .then(res =>{
    //       console.log(res.data.results[0].overview)
    //       this.setState({movieSearchResult: res.data.results})
    //     })
    //   }

    componentDidMount(){
        // movieSearchResult.get(`${title}`)
        movieSearchResult.get("Avengers")
        .then(res =>{
        //   console.log(res.data.results[0].overview)
        //   this.setState({movieSearchResult: res.data.results})
        this.setState({movieSearchResult: res.data.results[0].overview})
        })
      }
      render(){
          return (
                <p>häj</p>
          );
      }
}
export default MovieSearch;