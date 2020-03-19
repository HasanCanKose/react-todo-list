import React, { Component } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      id: uuidv4(),
      item: "",
      editItem: false
    };
  }

  handleChange = event => {
    this.setState({
      item: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];
    if (this.state.item !== "") {
      this.setState({
        items: updatedItems,
        item: "",
        id: uuidv4(),
        editItem: false
      });
    } else {
      alert("The input bar is empty!");
    }
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    this.setState({
      items: filteredItems
    });
  };

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  };

  render() {
    return (
      <div className="App">
        <TodoInput
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem}
        />
        <TodoList
          items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
