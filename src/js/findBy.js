import base from './base.js';

export default function findBy(property, value) {
  return function search(array) {
    if (array[property] !== undefined && array[property].includes(value)) {
      return true;
    }
    return false;
  };
}

const finder = findBy('type', 'help');
base.filter(finder);
