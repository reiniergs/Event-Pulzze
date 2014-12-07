var React = require('react');
var TitlePage = require('./titlepage.js');
var Orbit = require('./orbit.js');
var TodoList = require('./todo.js');

var HomePage = React.createClass({
 	render : function () {
 		return (
 			<div className="row">
 				<Orbit />
 			</div>
 			);
 	}
});
module.exports = HomePage;