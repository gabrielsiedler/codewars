// http://www.codewars.com/kata/creating-elements-with-react/solutions/javascript/me

let React = require('react'); // No 'Yippeeee!!' please.

function createElement(content, tag, props) {
  if (!tag) {
    tag = 'div';
  }
  
  if(!props) {
    props = { prop: 'value' };
  }
  
  return React.createElement(tag, props, content);
}

function createUnorderedList(list) { 
  list = list.map(function (el, index) {
    return createElement(el, 'li', { key: index });
  });
  
  return createElement(list, 'ul');
}