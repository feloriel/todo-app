import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

class Todo extends Component {
  render() {
    const { 
      addTask, 
      removeTask,
      toggleCheck,
      tasks,
      setTasks,
      setTasksFilter,
      filter
    } = this.props;

    return(
      <div>
        <h1>To-Do</h1>
        <div>
          <TodoInput addTask={addTask} />
          <TodoList
            removeTask={removeTask}
            toggleCheck={toggleCheck}
            tasks={tasks}
            filter={filter}
            setTasks={setTasks}
          />
          <TodoFilter
            tasks={tasks}
            setTasksFilter={setTasksFilter}
          />
        </div>
      </div>
    );
  }
}

export default Todo;