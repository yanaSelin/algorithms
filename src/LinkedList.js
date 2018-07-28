class LinkedList {
  constructor(...list) {
    this.first = { value: null, next: null };
    this.last = this.first;
    list.forEach(this.add.bind(this))
  }

  add(item) {
    const newItem = { value: item, next: null };
    this.last.next = newItem;
    this.last = newItem;
  }

  has(value) {
    let current = this.first;
    while (current.next) {
      if (current.next.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

}

module.exports = LinkedList;