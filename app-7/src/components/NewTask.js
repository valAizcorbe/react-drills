import React, { Component } from 'react'

class NewTask extends Component {

    constructor(){
        super();
        this.state = {
            input:""

        }
    }

    handleAdd = (value) => {
        this.setState({input: value})
    }

    handleInputChange = () => {
        this.setState({input:""})
    }

    render(){
        return (
            <div>
                <input
                value={this.state.input}
                placeholder="Enter new task"
                onChange={e => this.handleInputChange(e.target.value)}/>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

export default NewTask;