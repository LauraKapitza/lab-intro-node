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

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
