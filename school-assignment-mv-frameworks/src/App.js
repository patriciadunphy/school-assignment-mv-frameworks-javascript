import React, { Component } from 'react';
import './App.css';
import AddToList from './AddToList';
import ListItem from './components/ListItem';
import List from './components/List';
import axios from 'axios';
import results from './results';



class App extends Component {
  state = {
    listItems: [ ]
  }

  componentDidMount(){
    results.get('/movies.json')
    .then(res => this.setState({ listItems: res.data}))
  }

  addToList = (title, year) => {
    results.post('/movies.json', {
      title: title,
      year: year,
      completed: false  
    })
    .then(res => this.setState({listItems: 
      [...this.state.listItems, res.data]
  }))
  ; 
  
  
  }
  render(){
    return (
      <div className="App">
        <AddToList addToList={this.addToList}/>
      </div>
    );
  }   
}

export default App;
