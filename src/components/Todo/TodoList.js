import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import filters from './filters';

class TodoList extends Component {
  filteredTasks = () => {
    const { tasks, filter } = this.props;
    if (filter === filters.completed) {
      return tasks.filter(task => task.completed);
    } else if (filter === filters.active) {
      return tasks.filter(task => !task.completed);
    } else {
      return tasks;
    }
  }

  findById = id => {
    return this.props.tasks.find(task => {
      return id === task.id
    });
  }

  onDragStart = (e, id) => {
    this.draggedItem = this.findById(id);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target);
    e.dataTransfer.setDragImage(e.target, 20, 20);
  }

  onDragOver = id => {
    const draggedOverItem = this.findById(id);
    // if the item is dragged over itself, ignore
    if (this.draggedItem === draggedOverItem) {
      return;
    }

    const index = this.props.tasks.findIndex(task => task.id === id);

    // filter out the currently dragged item
    let tasks = this.props.tasks.filter(task => task !== this.draggedItem);
    
    // add the dragged item after the dragged over item
    tasks.splice(index, 0, this.draggedItem);

    this.props.setTasks(tasks);
  }

  render() {
    const { tasks, removeTask, toggleCheck } = this.props;

    return(
      <React.Fragment>
        {tasks && 
          this.filteredTasks().map(task => 
            <TodoListItem
              key={task.id}
              task={task}
              toggleCheck={toggleCheck}
              removeTask={removeTask}
              onDragOver={this.onDragOver}
              onDragStart={this.onDragStart}
            />
          )
        }
      </React.Fragment>
    );
  }
}

export default TodoList;