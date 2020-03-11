import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faBars } from '@fortawesome/free-solid-svg-icons';

class TodoListItem extends Component {
  render() {
    const {
      task,
      removeTask,
      toggleCheck,
      onDragOver,
      onDragStart,
      onDragEnd
    } = this.props;

    return(
      <div 
        className="task" 
        onDragOver={(e) => onDragOver(task.id)}
        onDragEnd={onDragEnd}
      >
        <div className="task-description">
          <span 
            className={`checkbox ${task.completed ? 'checked' : ''}`} 
            onClick={() => toggleCheck(task.id)}
          >
          </span>
          <span>{task.task}</span>
        </div>
        <div className="action-btns">
          <button className="btn" onClick={() => removeTask(task.id)}>
            <FontAwesomeIcon icon={faTrash} color="white" />
          </button>
          <button className="btn" onDragStart={e => onDragStart(e, task.id)} draggable>
            <FontAwesomeIcon icon={faBars} color="white" />
          </button>
        </div>
      </div>
    );
  }
}

export default TodoListItem;