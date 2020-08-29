import React from 'react';
import results from './results';

class AddToList extends React.Component{
    state = {
        title: '',
        year: ''
    }

    postDataHandler = (e) =>{
        e.preventDefault();
        const Data = {
            title: this.state.title,
            year: this.state.year
        }

        results.post('/movies.json', Data).then(response=>{
            console.log(response);
        })
    }

    render(){
        return (
            <div>
                <form className="movieForm" onSubmit={this.postDataHandler}>
                    <input type="text" placeholder="Enter title" value={this.state.title} 
                    onChange={(e)=>this.setState({title: e.target.value})}/>
                    <input type="text" placeholder="Enter year (optional)" value={this.state.year}
                    onChange={(e)=>this.setState({year: e.target.value})}/>
                    <button className="submitButton">Submit</button>
                </form> 
            </div>
        )
    }
}
export default AddToList;