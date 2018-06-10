import React from 'react';
import { connect } from 'react-redux';

import ExpenseItem from './expenseItem.jsx';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);

    this.displayAllExpenses = this.displayAllExpenses.bind(this);
  }

  displayAllExpenses() {
    return this.props.expenses.map((expense, i) => {
      if (this.props.categoryId === expense.categoryId) {
        return (
          <ExpenseItem
            key={i}
            id={expense.id}
            categoryId={expense.categoryId}
            name={expense.name}
            amount={expense.amount}
            isEditing={expense.isEditing}
          />
        );
      }
    });
  }

  render() {
    return (
      <div>
        <ul>{this.displayAllExpenses()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses.expenses
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseCreate: val => dispatch(expenseCreate(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseList);
