import React, { Component } from 'react';
import movieSearchResult from './movieSearchResult';

const MovieSearch = (props) => {
        let overview = '';

        let title = props.title.replace(/\s/g, "+");

        movieSearchResult.get(title)
        .then(res =>{
        //   console.log(res.data.results[0].overview)
        //   this.setState({movieSearchResult: res.data.results})
        // this.setState({movieSearchResult: res.data.results[0]})
        overview = res.data.results[0].overview
        console.log(res.data.results[0].overview)
        })

        // console.log(res.data.results)
        // console.log(this.state);
        // })

        return (
            <span>hej man</span>
            // <span>{overview}</span>
      );
}



// class MovieSearch extends Component{
//     state = {
//         movieSearchResult: []
//     }

//     componentDidMount(){
//         // movieSearchResult.get(`${props.title}`)
//         movieSearchResult.get("Avengers")
//         .then(res =>{
//         //   console.log(res.data.results[0].overview)
//         //   this.setState({movieSearchResult: res.data.results})
//         // this.setState({movieSearchResult: res.data.results[0]})
//         this.setState({movieSearchResult: res.data.results})

//         console.log(res.data.results)
//         console.log(this.state);
//         })
//       }
//       render(){
//           return (
//                 <p>hej</p>
//                 // <p>{movieSearchResult[0]}</p>
//           );
//       }
// }
export default MovieSearch;