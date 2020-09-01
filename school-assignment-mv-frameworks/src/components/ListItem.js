import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class ListItem extends Component {
    getStyle = () => {
        //If list item is complete it'll be line-through, else it won't (none)
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.listItem.completed ? 'line-through' : 'none'
        }
    }

    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        const { id, title, year } = this.props.listItem;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{''}
                    { title } ({year})
                    <button onClick={this.props.delete.bind(this, id)} style = {btnStyle}>x</button>
                </p>
            </div>
        )
    }
}
//PropTypes
// ListItem.propTypes = {
//     listItem: PropTypes.object.isRequired,
//     markComplete: PropTypes.func.isRequired,
//     delete: PropTypes.func.isRequired
// }

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default ListItem;
