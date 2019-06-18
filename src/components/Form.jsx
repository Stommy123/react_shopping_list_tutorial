import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: String(),
    description: String(),
    isDuplicate: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addNewItem } = this.props;
    const { name, description } = this.state;
    addNewItem && addNewItem({ name, description });
    this.setState({ name: String(), description: String() });
  };

  handleInputChange = field => e => this.setState({ [field]: e.target.value });

  checkForDuplicates = newItem => e => {
    const { list } = this.props;
    const isDuplicate = list.some(item => item.name.toLowerCase() === newItem.toLowerCase());
    isDuplicate && alert('Item already exists. Please enter a different item');
    this.setState({ isDuplicate });
  };

  render() {
    const { name, description, isDuplicate } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            onChange={this.handleInputChange('name')}
            onBlur={this.checkForDuplicates(name)}
            value={name}
          />
        </div>
        <div>
          <label>Description: </label>
          <textarea
            id="description-input"
            type="text"
            onChange={this.handleInputChange('description')}
            value={description}
          />
        </div>
        <input id="submit-btn" type="submit" value="Add Item" disabled={isDuplicate} />
      </form>
    );
  }
}

export default Form;
