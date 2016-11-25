var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');

// get the dom and insert a list inside of the html element id 'ingredients'
ReactDOM.render(<List />, document.getElementById('ingredients'));
