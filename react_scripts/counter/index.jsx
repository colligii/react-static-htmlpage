var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./app.jsx');

ReactDOM.hydrate(
    <App/>,
    document.querySelector('#counter-js')
)