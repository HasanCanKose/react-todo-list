import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div className="list">
        <h1 className="text">Todo List</h1>
        <ul className="list-ul">
          {items.map(item => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}
          <button className="list-button" type="button" onClick={clearList}>
            Clear List
          </button>
        </ul>
      </div>
    );
  }
}

export default TodoList;
