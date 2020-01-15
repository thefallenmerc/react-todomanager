import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

import InputField from "./components/InputField";
import TaskList from "./components/TaskList";
import TaskDescription from "./components/TaskDescription";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Deadpool",
      lastIndex: -1,
      selectedIndex: null,
      tasks: []
    };

    this.addTask = this.addTask.bind(this);
    this.selectTask = this.selectTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask(event) {
    if (event.key === "Enter") {
      if (event.target.value.trim() === "") {
        return;
      }
      const { tasks } = this.state;
      const lastIndex = this.state.lastIndex + 1;
      tasks.push({
        name: event.target.value,
        key: lastIndex
      });
      this.setState({
        tasks,
        lastIndex
      });
      event.target.value = "";
    }
  }

  selectTask(task) {
    this.setState({
      selectedIndex: task.key
    });
  }

  get selectedTask() {
    return this.state.tasks.find(task => task.key === this.state.selectedIndex);
  }

  deleteTask(event, task) {
    event.stopPropagation(event);
    const { tasks } = this.state;
    tasks.splice(tasks.findIndex(t => t.key === task.key), 1);
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
          <TaskList
            {...this.state}
            deleteTask={this.deleteTask}
            selectTask={this.selectTask}
          />
        </p>
        <TaskDescription task={this.selectedTask} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
