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
// var getElementsByClassName = function(className, node) {
//   //parameters: string of class names to match, multiple classnames separated by white space
//   var classNames = className.split(' ');
//   //Loop through document body and collect all elements with the target classname
//   var elementsWithClassname = [];
//   if (!node && document.body) {
//     var body = document.body;

//     if (body.classList.contains(className)) {
//       elementsWithClassname.concat(body);
//     }
//     var bodyChildNodes = body.childNodes;
//     bodyChildNodes.forEach(function(element) {
//       console.log(element)
//       elementsWithClassname.concat(getElementsByClassName(className, element));
//     });
//   } else {
//     console.log(node)
//     if (!node) {
//       return [];
//     }
//     if (node.classList && node.classList.contains(className)) {
//       return [node];
//     } else {
//       return [];
//     }
//   }



//   //   if (node.childNodes.length === 0) {

//   //       return elementsWithClassname.concat(node);
//   //     }
//   //     console.log(node.childNodes);
//   //     return elementsWithClassname.concat(node, getElementsByClassName(className, node.children));
//   //   }

//   //   if (node.childNodes.length > 0) {
//   //     return elementsWithClassname.concat(getElementsByClassName(className, node.children));
//   //   } else {
//   //     return [];
//   //   }
//   // } else {

//   // }
//   // create function to check whether the target node has the required classname
//   //and push to elementsWithClassName

//   //return a HTML collection of found elements
//   return elementsWithClassname;
// };

console.log(getElementsByClassName('<div><div class="targetClassName"><div class="targetClassName"></div></div></div>'));