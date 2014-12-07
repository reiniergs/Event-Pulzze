var React = require('react');

var TitlePage = React.createClass({
	render : function () {
		return (
			<h1>{this.props.title}</h1>
			);
	}
});
module.exports = TitlePage;