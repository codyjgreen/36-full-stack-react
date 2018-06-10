export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DESTROY = 'CATEGORY_DESTROY';
export const CATEGORY_INFLATE = 'CATEGORY_INFLATE';

export function categoryCreate(value) {
  return { type: CATEGORY_CREATE, value };
}

export function categoryUpdate(values) {
  return { type: CATEGORY_UPDATE, values };
}

export function categoryDestroy(id) {
  return { type: CATEGORY_DESTROY, id };
}

export function categoryInflate(json) {
  return { type: CATEGORY_INFLATE, json };
}
