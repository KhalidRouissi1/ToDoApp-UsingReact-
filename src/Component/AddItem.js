import React, { Component } from "react";

class AddItem extends Component {
  state = {
    name: "",
    age: "",
  };

  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      name: "",
      age: "",
    });
  };
  render() {
    return (
      <form className="inputs" onSubmit={this.handelSubmit}>
        <input
          className="nameOfUser"
          placeholder="Enter Your Name"
          id="name"
          onChange={this.handelChange}
          value={this.state.name}
        />
        <span className="ageInAndSub">
          <input
            type="number"
            id="age"
            placeholder="Enter your age ..."
            className="ageIn"
            onChange={this.handelChange}
            value={this.state.age}
          />
          <input id="age" className="btn" type="submit" value="Add" />
        </span>
      </form>
    );
  }
}

export default AddItem;
