import React, { Component } from 'react';

class TodoInput extends Component {
  state = {
    task: ''
  }

  generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  handleChange = event => {
    const { value } = event.target
  
    this.setState({
      task: value
    })
  }

  submitTask = event => {
    event.preventDefault();
    const id = this.generateId();
    this.props.addTask({...this.state, id, completed: false});
    this.setState({
      task: ''
    });
  }

  render() {
    return(
      <form onSubmit={this.submitTask}>
        <input 
          type="text"
          placeholder="Add new task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <input 
          type="submit" 
          value="Add task"
        />
      </form>
    );
  }
}

export default TodoInput;