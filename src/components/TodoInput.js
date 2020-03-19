import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="input">
        <h1 className="text">Todo Input</h1>
        <form className="input-form" onSubmit={handleSubmit}>
          <input
            className="input-text"
            type="text"
            placeholder="Add a todo item"
            value={item}
            onChange={handleChange}
          />
          <button
            className={editItem ? "input-button-edit" : "input-button"}
            type="submit"
          >
            {editItem ? "Edit Item" : "Add Item"}
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
