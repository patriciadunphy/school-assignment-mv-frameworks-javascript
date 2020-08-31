import React, { Component } from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

class List extends Component {

    render(){
        //mapping through each todo
        return this.props.listItem.map((listItem) => (
        <ListItem key={listItem.id} listItem={listItem} markComplete={this.props.markComplete}
        delete={this.props.delete}/>
        ));
    }
}

    //PropTypes
    List.propTypes = {
        listItems: PropTypes.array.isRequired,
        markComplete: PropTypes.func.isRequired,
        delete: PropTypes.func.isRequired
    }

export default List;