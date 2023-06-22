import React from 'react';

class ToDoItem extends React.Component {
    shouldComponentUpdate(nextProps) {
      return nextProps.item.id !== this.props.item.id;
    }
  
    render() {
      const { item, handleMarkDone, handleDeleteToDo } = this.props;
  
      return (
        <li>
          {item.text}
          <button onClick={() => handleMarkDone(item.id)}>Done</button>
          <button onClick={() => handleDeleteToDo(item.id)}>Delete</button>
        </li>
      );
    }
  }

  export default ToDoItem;