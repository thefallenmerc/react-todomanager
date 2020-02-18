import React from "react";

export default class TaskDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.updateName = this.updateName.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
  }

  get task() {
    return this.props.task;
  }

  updateName(event) {
    const task = { ...this.task };
    task.name = event.target.value;
    console.log(task);
    this.props.updateTask(task);
  }

  updateDescription(event) {
    const task = { ...this.task };
    task.description = event.target.value;
    this.props.updateTask(task);
  }

  render() {
    if (!this.task) {
      return <div className="task-description-container" />;
    }
    return (
      <div className="task-description-container">
          <input
            className="task-name"
            value={this.task.name}
            onChange={this.updateName}
            placeholder="Please enter a title..."
          />
        <textarea
          className="task-description"
          value={this.task.description}
          onChange={this.updateDescription}
          placeholder="Please enter a description..."
        />
      </div>
    );
  }
}
