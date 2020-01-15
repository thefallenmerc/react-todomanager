import React from 'react';

export default (props) => {
  return (
    <input type="text" className="task-input" onKeyUp={event => { props.addTask(event) }}/>
  );
}