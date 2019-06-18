import React, { Component } from 'react';

class Form extends Component {
  state = { name: String(), description: String(), inCart: false };

  handleSubmit = e => {
    e.preventDefault();
    const { addNewItem } = this.props;
    this.checkForDuplicates(this.state.name)
      ? alert('Item already exists. Please enter a different item.')
      : addNewItem && addNewItem(this.state);
    this.setState({ name: String(), description: String() });
  };

  handleInputChange = field => e => this.setState({ [field]: e.target.value });

  checkForDuplicates = newItem => this.props.list.find(item => item['name'].toLowerCase() === newItem.toLowerCase());

  render() {
    const { name, description } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" onChange={this.handleInputChange('name')} value={name} />
        </div>
        <div>
          <label>Description: </label>
          <textarea type="text" onChange={this.handleInputChange('description')} value={description} />
        </div>
        <input type="submit" value="Add item" />
      </form>
    );
  }
}

export default Form;
