import React, { Component } from 'react';
import Card from './layout/Card';

export class ListItem extends Component {
    getStyle = () => {
        //If list item is complete it'll be line-through, else it won't (none)
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.listItem.completed ? 'line-through' : 'none',
            marginLeft: '20%',
            marginRight: '20%'
        }
    }

    markComplete = (e) => {
        console.log(this.props)
    }

    //State for readMore function
    constructor(){
        super()
        this.state={
            showCard: false
        }
    }

    //Function to toggle read more section
    readMore(){
        this.setState({
            showCard: !this.state.showCard
        })
    }
    render() {
        const { id, title, year } = this.props.listItem;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{''}
                    <span id="title" onClick={()=>this.readMore()} style={titleStyle}>{ title } ({year})</span>
                    
                    <button onClick={this.props.delete.bind(this, id)} style = {btnStyle}>x</button>
                </p>
                {   
                    //If showCard is true this div will be returned, 
                    this.state.showCard?
                    <div>
                        Please hide me
                        <Card />
                    </div>
                    
                    //otherwise null will be returned
                    : null
                }
                
            </div>
        )
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

const titleStyle = {
    cursor: 'pointer',
}

export default ListItem;
