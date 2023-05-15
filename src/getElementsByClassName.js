// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elementsWithClassName = [];
  var body = document.body;

  var checkChildNodes = function(node) {
    var nodeClassList = node.classList;
    nodeChildNodes = node.childNodes;
    if (nodeClassList && nodeClassList.contains(className)) {
      elementsWithClassName.push(node);
    }
    if (nodeChildNodes) {
      nodeChildNodes.forEach(function(node) {
        checkChildNodes(node);
      });
    }
  };

  checkChildNodes(body);
  return elementsWithClassName;
};
