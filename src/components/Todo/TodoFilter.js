import React, { Component } from 'react';
import filters from './filters';

class TodoFilter extends Component {
  render() {
    const { setTasksFilter } = this.props;

    return(
      <React.Fragment>
        {Object.values(filters).map((filter, index) => 
          <button key={index} onClick={() => setTasksFilter(filter)}>{filter}</button>
        )}
      </React.Fragment>
    );
  }
}

export default TodoFilter;