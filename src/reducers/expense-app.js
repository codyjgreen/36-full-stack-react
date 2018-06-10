import {
  EXPENSE_CREATE,
  EXPENSE_UPDATE,
  EXPENSE_DESTROY
} from '../actions/expenseActions.js';
import uuidv1 from 'uuid/v1';

const initialState = {
  expenses: []
};

export default function expenseReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState = {};
  let currentExpenses;
  let expenseIndex;

  switch (action.type) {
    case EXPENSE_CREATE:
      currentExpenses = state.expenses.slice();
      let newExpense = Object.assign({}, action.value, { id: uuidv1() });
      currentExpenses.push(newExpense);
      return Object.assign(newState, state, { expenses: currentExpenses });
    case EXPENSE_UPDATE:
      currentExpenses = state.expenses.slice();
      let expenseToUpdate = currentExpenses.find(expense => {
        return expense.id === action.values.id;
      });
      expenseIndex = currentExpenses.indexOf(expenseToUpdate);
      currentExpenses[expenseIndex].isEditing = !currentExpenses[expenseIndex]
        .isEditing;
      if (action.values.name) {
        currentExpenses[expenseIndex].name = action.values.name;
      }
      if (action.values.amount) {
        currentExpenses[expenseIndex].amount = action.values.amount;
      }
      return Object.assign(newState, state, { expenses: currentExpenses });
    case EXPENSE_DESTROY:
      currentExpenses = state.expenses.slice();
      let expenseToRemove = currentExpenses.find(expense => {
        return expense.id === action.id;
      });
      expenseIndex = currentExpenses.indexOf(expenseToRemove);
      currentExpenses.splice(expenseIndex, 1);
      return Object.assign(newState, state, { expenses: currentExpenses });
    default:
      return state;
  }
}
