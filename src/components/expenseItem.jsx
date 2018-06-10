import React from 'react';
import { connect } from 'react-redux';
import { expenseUpdate, expenseDestroy } from '../actions/expenseActions.js';

import ExpenseForm from './expenseForm.jsx';
import ExpenseList from './expenseList.jsx';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleOffEdit = this.toggleOffEdit.bind(this);
  }

  toggleEdit(event) {
    let id = event.target.id;
    this.props.expenseUpdate({ isEditing: true, id });
  }

  toggleOffEdit(event) {
    let id = event.target.id;
    this.props.expenseUpdate({ isEditing: false, id });
  }

  handleDelete(event) {
    event.preventDefault();
    let id = event.target.id;
    this.props.expenseDestroy(id);
  }

  render() {
    if (this.props.isEditing === true) {
      return (
        <div>
          <ExpenseForm
            name="update"
            id={this.props.id}
            buttonText="Update"
            categoryId={this.props.categoryId}
          />
          <button onClick={this.toggleOffEdit} id={this.props.id}>
            Cancel
          </button>
        </div>
      );
    }
    return (
      <li key={this.props.key} id={this.props.id}>
        <p>
          {this.props.name}: -${this.props.amount}
          <button id={this.props.id} onClick={this.handleDelete}>
            X
          </button>
          <button id={this.props.id} onClick={this.toggleEdit}>
            Edit
          </button>
        </p>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses.expenses
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseUpdate: values => dispatch(expenseUpdate(values)),
    expenseDestroy: id => dispatch(expenseDestroy(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseItem);
