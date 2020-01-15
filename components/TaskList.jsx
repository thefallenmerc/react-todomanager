import React from "react";

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tasks } = this.props;
    return (
      <ul className="task-list">
        {tasks.map(task => {
          return (
            <li className="task-item" key={task.key}>
              {task.name}
              <span className="delete-item" onClick={() => { this.props.deleteTask(task) }}>&times;</span>
            </li>
          );
        })}
      </ul>
    );
  }
}
