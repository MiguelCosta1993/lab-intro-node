class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    if (this.items.length) {
      this.items.sort((a, b) => {
        return a - b;
      });
      this.length = this.items.length;
    }
  }

  get(pos) {
    if (pos <= this.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length) {
      return Math.max(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length) {
      return Math.min(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.items.length) {
      return this.items.reduce((a, b) => a + b, 0);
    } else if (this.length === 0) return 0;
  }

  avg() {
    if (this.items.length) {
      return this.items.reduce((a, b) => a + b, 0) / this.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
