import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import TaskList from './components/TaskList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          <TaskList />
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
