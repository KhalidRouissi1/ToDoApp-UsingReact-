import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Items from "./Component/Items";
import AddItem from "./Component/AddItem";
class App extends Component {
  state = {
    items: [
      { id: 1, name: "Khalid", age: 19 },
      { id: 2, name: "Ala", age: 21 },
      { id: 3, name: "Ramzi", age: 23 },
    ],
  };
  // first way

  // deleteItem = (id) => {
  //   let items = this.state.items;
  //   let i = items.findIndex((item) => item.id === id);
  //   items.splice(i, 1);
  //   this.setState({
  //     items: items,
  //   });
  // };*/

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };

  deleteItem = (id) => {
    // filter is gonna to delete all unecessary items it will keep just the true ones
    //YOU CAN SPLICE WITH FILTER
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">To Do APP</h1>
          <div className="content">
            <div className="Titles">
              <span>Name</span>
              <span className="nestedContent">
                <span>Age</span>
                <span>Action</span>
              </span>
            </div>

            <div>
              <Items items={this.state.items} deleteItem={this.deleteItem} />
            </div>

            <AddItem addItem={this.addItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
