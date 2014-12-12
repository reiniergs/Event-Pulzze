var React = require('react');
var variables = require('./app-variables.js')

var cssContainer = {
	borderBottom : '1px solid',
	marginBottom : '20px'
}
var cssText = {
	color : variables.bgMainColor,
	textTransform : 'uppercase'
}
var TitlePage = React.createClass({
	render : function () {
		return (
			<div className="large-12 columns" style={cssContainer}>
				<h1 style={cssText}>{this.props.title}</h1>
			</div>
			);
	}
});
module.exports = TitlePage;