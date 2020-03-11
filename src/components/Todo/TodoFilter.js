import React, { Component } from 'react';
import filters from './filters';

class TodoFilter extends Component {
  render() {
    const { setTasksFilter } = this.props;

    return(
      <React.Fragment>
        <div className="filter-buttons">
          {Object.values(filters).map((filter, index) => 
            <button 
              key={index} 
              name={filter}
              onClick={() => setTasksFilter(filter) }
              className={this.props.filter === filter ? 'active': null} 
            >
              {filter}
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default TodoFilter;