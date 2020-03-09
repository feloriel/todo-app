import React, { Component } from 'react';

class TodoListItem extends Component {
  render() {
    const {
      task,
      removeTask,
      toggleCheck,
      onDragOver,
      onDragStart
    } = this.props;

    return(
      <div 
        className="item" 
        onDragOver={() => onDragOver(task.id)}
        onDragStart={e => onDragStart(e, task.id)}
        draggable
      >
        <div>
          <input 
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCheck(task.id)}
          />
          {task.task}
        </div>
        <button onClick={() => removeTask(task.id)}>X</button>
      </div>
    );
  }
}

export default TodoListItem;