import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

import InputField from "./components/InputField";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Deadpool",
      lastIndex: -1,
      tasks: []
    };

    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask(event) {
    if (event.key === "Enter") {
      if(event.target.value.trim() === '') {
        return;
      }
      const { tasks } = this.state;
      const lastIndex = this.state.lastIndex++;
      tasks.push({
        name: event.target.value,
        key: lastIndex
      });
      this.setState({
        tasks,
        lastIndex
      });
      event.target.value = '';
    }
  }

  deleteTask(task) {
    const { tasks } = this.state;
    tasks.splice(tasks.indexOf(task), 1);
    this.setState({
      tasks
    });
  }

  render() {
    return (
      <div>
        <h4>{this.state.name}</h4>
        <InputField addTask={this.addTask} />
        <p>
          <TaskList {...this.state} deleteTask={this.deleteTask} />
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
