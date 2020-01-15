import React from 'react';

export default (props) => {
  return (
    <input type="text" onKeyUp={event => { props.addTask(event) }}/>
  );
}