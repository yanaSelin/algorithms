const hash = (string) => {
  return string
    .split('')
    .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
};

class HashMap {
  constructor() {
    this.store = [];
  }

  set(key, value) {
    const index = hash(key);
    if (this.store[index] && !this.store[index].find(el => el[0] === key)) {
      this.store[index].push([key, value]);
    } else {
      this.store[index] = [[key, value]];
    }
  }

  get(key) {
    return this.store[hash(key)].find(el => el[0] === key)[1];
  }

}

module.exports = HashMap;