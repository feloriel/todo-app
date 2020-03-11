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
      <div className="todo-container">
        <h1>Todo list</h1>
        <TodoInput addTask={addTask} />
        <TodoFilter
          tasks={tasks}
          filter={filter}
          setTasksFilter={setTasksFilter}
        />
        <TodoList
          removeTask={removeTask}
          toggleCheck={toggleCheck}
          tasks={tasks}
          filter={filter}
          setTasks={setTasks}
        />
      </div>
    );
  }
}

export default Todo;