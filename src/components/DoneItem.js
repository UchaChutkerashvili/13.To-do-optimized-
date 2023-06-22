import React from 'react';

class DoneItem extends React.Component {
    shouldComponentUpdate(nextProps) {
      return nextProps.item.id !== this.props.item.id;
    }
  
    render() {
      const { item, handleMoveToToDo, handleDeleteToDo } = this.props;
  
      return (
        <li>
          {item.text}
          <button onClick={() => handleMoveToToDo(item.id)}>Move to To Do</button>
          <button onClick={() => handleDeleteToDo(item.id)}>Delete</button>
        </li>
      );
    }
  }
  
  export default DoneItem;