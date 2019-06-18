import React, { Component } from 'react';

class Form extends Component {
  state = {
    id: Math.ceil(Math.random() * 100000),
    name: String(),
    description: String(),
    inCart: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addNewItem } = this.props;
    addNewItem && addNewItem(this.state);
    this.setState({ name: String(), description: String() });
  };

  handleInputChange = field => e => this.setState({ [field]: e.target.value });

  checkForDuplicates = newItem => e => {
    const { list } = this.props;
    const checkDuplicate = list.some(item => item.name.toLowerCase() === newItem.toLowerCase());
    if (checkDuplicate) {
      this.toggleForm(true);
      alert('Item already exists. Please enter a different item.');
    } else {
      this.toggleForm(false);
    }
  };

  toggleForm = boolean => {
    document.querySelector('#description-input').disabled = boolean;
    document.querySelector('#submit-btn').disabled = boolean;
  };

  render() {
    const { name, description } = this.state;
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
        <input id="submit-btn" type="submit" value="Add item" />
      </form>
    );
  }
}

export default Form;
