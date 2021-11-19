class SortedList {
  constructor(items = [], length = 0) {
    this.items = items;
    this.length = length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let maxNum = 0;
      for (let i = 0; i < this.items.length; i++) {
        if (maxNum < this.items[i]) {
          maxNum = this.items[i];
        }
      }
      return maxNum;

      //  alternative code ES6
      // return Math.max(...this.items)
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      let sum = 0;
      for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i];
      }
      return sum;
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let total = 0;
      for (let i = 0; i < this.items.length; i++) {
        total += this.items[i];
      }
      return total / this.items.length; //avg
    }
  }
}

module.exports = SortedList;
