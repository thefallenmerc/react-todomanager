import React from "react";

export default props => {
  const { task } = props;
  if (!task) {
    return <div />;
  }
  return (
    <div>
      Selected Task:
      <h3> {this.props.task.name} </h3>
    </div>
  );
};
