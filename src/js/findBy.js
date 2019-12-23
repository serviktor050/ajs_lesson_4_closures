import base from './base.js';

const findBy = (property, value) => (array) => {
  if (array[property] !== undefined && array[property].includes(value)) {
    return true;
  }
  return false;
};

const finder = findBy('type', 'help');
base.filter(finder);

export default findBy;
