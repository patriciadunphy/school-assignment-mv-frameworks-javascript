import React, { Component } from 'react';
import movieSearchResult from './movieSearchResult';


const MovieSearch = (props) => {
        const apiResult = [];
        const title = props.title.replace(/\s/g, "+");
        movieSearchResult.get(title)
            .then(res =>{
                const results = res.data.results
                const overview = JSON.stringify(res.data.results[0].overview)
                apiResult.push(overview)
                console.log(apiResult)
            })
    return (
        <span>placeholder</span>
        // <span>{apiResult[0]}</span>
    )
}
export default MovieSearch;

// class MovieSearch extends Component {

//     constructor(props){
//         super(props)
//         this.state = {}

//         this.performSearch()
//     }

    
//     performSearch(){
//         const title = this.props.title.replace(/\s/g, "+");
//         // console.log("Perform search using moviedb")
//         movieSearchResult.get(title)
//             .then(res =>{
//                 // console.log('fetched data successfully')
//                 const results = res.data.results

//                 var movieRows = []

//                 // console.log(res.data.results[0].overview)

//                 const overview = JSON.stringify(res.data.results[0].overview)
//                 console.log(overview)
//                 // res.forEach((movie)=>{
//                 //     console.log(movie.title)
//                 // })
//                 // Object.entries(res).map(([key, value])=>{
//                 //     console.log(value[1])
//                 // })

//                 // console.log(results[0])
//                 // this.setState({ movieList : res.data.results })
//                 // console.log(this.state.movieList)
//                 })
//     }

//     render(){
//         return(
//             <span>overview</span>
//         )
//     }
    
// }
// export default MovieSearch;
// class MovieSearch extends Component {

//         constructor(props){
//             super(props);

//             this.state = {
//                 movieList: []
//             }
//         }
//         componentDidMount(){
//             //Replacing spaces in title (from input) with +
//             const title = this.props.title.replace(/\s/g, "+");
        
//             //Searching in the movie database for the title
//             movieSearchResult.get(title)
//             .then(res =>{
//                 this.setState({ movieList : res.data.results })
//                 console.log(this.state.movieList)
//                 })
//         }        
//         render(){
            
//         return (
//             <span>hej man</span>

//       );
// }
// }
// export default MovieSearch;