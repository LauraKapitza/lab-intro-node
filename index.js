class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) =>  a - b);
  }

  get(pos) {
    let value = this.items[pos];
    if (!value) {
      throw new Error('OutOfBounds');
    }
    return value;
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    let i = this.length-1;
    return this.items[i];
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.items.reduce((acc, el) => acc + el)
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.length;

  }
}

module.exports = SortedList;
