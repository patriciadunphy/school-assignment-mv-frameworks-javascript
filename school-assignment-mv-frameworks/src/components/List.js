import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {

    render(){
        //mapping through each todo
        return this.props.listItems.map((listItem) => (
        <ListItem key={listItem.id} listItem={listItem} markComplete={this.props.markComplete}
        delete={this.props.delete}/>
        ));
    }
}
export default List;