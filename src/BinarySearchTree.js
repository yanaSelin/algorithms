class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(...values) {
    values.forEach(this.addNode.bind(this));
  }

  addNode(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = new Node(value);
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = new Node(value);
          break;
        }
        current = current.right;
      }
    }
  }

  has(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return true;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  remove(value) {
    if (!this.has(value)) {
      return false;
    }
    this.root = this.removeNode(value) || this.root;
  }

  removeNode(value, root = this.root) {
    if (value === root.value) {
      return this.getUpdatedBranch(root);
    }
    if (value < root.value) {
      root.left = this.removeNode(value, root.left);
    } else {
      root.right = this.removeNode(value, root.right);
    }
  }

  getUpdatedBranch(root) {
    if (!root.left) {
      return root.right || null;
    }
    if (!root.right) {
      return root.left || null;
    }
    let parent = root.right;
    if (!parent.left) {
      return parent;
    }
    while (parent.left.left) {
      parent = parent.left;
    }
    const newRoot = parent.left;
    parent.left = null;
    return newRoot;
  }

  size() {
    return this.countNodes(this.root)
  }

  countNodes(root) {
    if (!root) {
      return 0;
    }
    let count = 1;
    count += this.countNodes(root.left);
    count += this.countNodes(root.right);
    return count;
  }
}

module.exports = BinarySearchTree;