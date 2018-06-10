import React from 'react';

class CategoryEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      number: this.props.number,
      id: this.props.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.finishEdit(this.state);
  }

  cancel() {
    this.props.toggleEdit();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.title}
          id="title"
        />

        <input
          type="number"
          onChange={this.handleChange}
          value={this.state.number}
          id="number"
        />

        <button onClick={this.cancel}>Cancel</button>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default CategoryEdit;
