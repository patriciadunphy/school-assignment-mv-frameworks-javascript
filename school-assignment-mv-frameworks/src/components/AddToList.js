import React, { Component } from 'react';

class AddToList extends Component{
    state = {
        title: '',
        year: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        const Data = {
            title: this.state.title,
            year: this.state.year,
        }
        this.props.addToList(Data.title, Data.year);
        this.setState({ title: ''});
        this.setState({ year: ''});
    }
     
    onChange = (e) => this.setState({[e.target.name]:e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex', paddingLeft: '20%', paddingRight: '20%'}}>
                <input 
                type="text" 
                name="title" 
                placeholder="Add Movie ..."
                value={this.state.title}
                onChange={this.onChange}
                />
                <input 
                type="text" 
                name="year" 
                placeholder="Add Year ..."
                value={this.state.year}
                onChange={this.onChange}
                />
                <input 
                type="submit" 
                value="Submit" 
                className="submitButton" 
                />
            </form>
        )
    }
}

export default AddToList;