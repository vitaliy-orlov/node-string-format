require('./index');

var node = 'NODE';
var message = 'Hello world';

console.log('{0}: {1}, test: {{0}}'.f(node, message));
console.log('{0}: {1}, test: {{0}}'.f());
console.log('{0}'.f(node, message));
console.log('{{0}}'.f(node, message));
console.log('Print with missing'.f(node, message));