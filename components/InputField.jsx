import React from "react";

export default props => {
  return (
    <input
      type="text"
      className="task-input"
      placeholder="Create a task"
      onKeyUp={event => {
        props.addTask(event);
      }}
    />
  );
};
