var inorderTraversal = function(root) {
    let tree = root;
    let solution = [];
    
    function _traverse(node) {
        if (node && node.left !== null) {
            _traverse(node.left)
        }
        if (node && node.val !== null) {
            solution.push(node.val);
        }
        if (node && node.right) {
            _traverse(node.right);
        }
    }
    
    traverse(tree);
    return solution;
}

  // in order w/ stack
  var inorderTraversal = function(root) {
    let visited = [];
    let stack = [];
    let current = root;
    
    while (current !== null || stack.length !== 0) {
      while (current !== null) {
        stack.push(current);
        current = current.left;
      } 
        current = stack.pop();
        visited.push(current.val);
        current = current.right;
    }
    return visited;
  };

  var depthFirstTraversal = function(root) {
    let tree = root;
    let solution = [];
    
    function _traverse(node) {
        if (node && node.val !== null) {
            solution.push(node.val);
        }
        if (node && node.left !== null) {
            _traverse(node.left)
        }
        if (node && node.right) {
            _traverse(node.right);
        }
    }
    
    _traverse(tree);
    return solution;
}

var levelOrder = function(root) {
  let result = [];
  root && traverse(root, 0);
  return result;
  
  function traverse(node, level) {
      result[level] && result[level].push(node.val) || (result[level] = [node.val]);
      node.left && traverse(node.left, level + 1);
      node.right && traverse(node.right, level + 1);
  };
};

// breadthFirstSearch iteratively
var breadthFirstSearch = function(root) {
  const visited = [];
  const queue = [];
  let current = root;

  queue.push(current);
  while (queue.length) {
    current = queue.shift();
    visited.push(current.val);

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  };

    return visited;
}
// breadthFirstSearch recursive
var breadthFirstSearch = function(root) {
    const visited = [];
    _traverse(root);
    function _traverse(node) {
      visited.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    }
    return visited;
  }