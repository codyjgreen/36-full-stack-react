export const EXPENSE_CREATE = 'EXPENSE_CREATE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_DESTROY = 'EXPENSE_DESTROY';

export function expenseCreate(value) {
  return { type: EXPENSE_CREATE, value };
}

export function expenseUpdate(values) {
  return { type: EXPENSE_UPDATE, values };
}

export function expenseDestroy(id) {
  return { type: EXPENSE_DESTROY, id };
}
