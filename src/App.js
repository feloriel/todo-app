import React, { Component } from 'react';
import Todo from './components/Todo/Todo';

class App extends Component {
  state = {
    tasks: [],
    filter: ''
  }

  componentDidMount() {
    const tasks = localStorage.getItem('tasks');
    if (tasks !== null) {
      this.setState({ tasks: JSON.parse(tasks) });
    }
  }

  save = () => {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  setTasksFilter = filter => {
    this.setState({ filter });
  }

  addTask = task => {
    this.setState({
      tasks: [...this.state.tasks, task]
    }, this.save);
  }

  removeTask = id => {
    const { tasks } = this.state;

    this.setState({
      tasks: tasks.filter((task) => {
        return task.id !== id
      })
    }, this.save);
  }

  toggleCheck = id => {
    const { tasks } = this.state;

    const task = tasks.find(task => {
      return id === task.id
    });

    task.completed = !task.completed;

    this.setTasks(tasks);
  }

  setTasks = tasks => {
    this.setState({ tasks }, this.save);
  }

  render() {
    const { tasks, filter } = this.state;

    return (
      <div className="app">
        <Todo
          setTasksFilter={this.setTasksFilter}
          filter={filter}
          addTask={this.addTask}
          removeTask={this.removeTask}
          toggleCheck={this.toggleCheck}
          tasks={tasks}
          setTasks={this.setTasks}
        />
      </div>
    );
  }
}

export default App;
