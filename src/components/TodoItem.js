import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="item">
        <div className="title">
          <h6 className="item-text">{title}</h6>
        </div>
        <div className="todo-icon">
          <span className="edit" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="delete" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
