import React, { Component } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import ListItem from './components/ListItem';
import List from './components/List';
// import axios from 'axios';
import results from './results';
import Header from './components/layout/Header';
import About from './components/pages/About';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import PropTypes from 'prop-types';




class App extends Component {
  state = {
    listItems: [ ]
  }

  // componentDidMount(){
  //   results.get('/movies.json')
  //   .then(res => this.setState({ listItems: res.data}))
  // }

  // componentDidMount(){
  //   results.get('/movies.json')
  //   .then(res =>{
  //     console.log(res.data)
  //     this.setState({ listItems: []})
  //   })
  // }
  componentDidMount(){
    results.get('/movies.json')
    .then(res =>{
      console.log(res.data)
      this.setState({ listItems: res.data})
    })
  }

  //Complete item
  markComplete = (id) => {
    this.setState({listItems: this.state.listItems.map(listItem=>{
      if(listItem.id === id){
        listItem.completed = !listItem.completed
      }
      return listItem;
    })});
  }
  //Delete item
  delete = (id) =>{
  results.delete(`/movies/${id}.json`)
    .then(res => this.setState({listItems: [...this.state.listItems.filter(listItem=>listItem.id!==id)]}));
}
  //Add item to list


  // addToList = (title, year) => {
  //   // const addId = this.state.listItems.length()+1;
  //   results.put(`/movies/${newId}.json`, {
  //     // id: addId,
  //     id: newId,
  //     title: title,
  //     year: year,
  //     completed: false  
  //   })
  //   .then(res => this.setState({listItems: 
  //     [...this.state.listItems, res.data]}));

  //TYP SÅHÄR

  addToList = (title, year) => {
    const newId = (this.state.listItems.length);
    results.put(`/movies/${newId}.json`, {
      id: newId,
      title: title,
      year: year,
      completed: false  
    })
    .then(res => this.setState({listItems: 
      [...this.state.listItems, res.data]}));
   
  
  
  }
  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddToList addToList={this.addToList}/>
                <List listItems={this.state.listItems} markComplete={this.markComplete}
                delete={this.delete}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />          
          </div>
        </div>
      </Router>
    );
  }   
}

export default App;

