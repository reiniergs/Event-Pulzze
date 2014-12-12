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
var TitlePage = React.createClass({displayName: 'TitlePage',
	render : function () {
		return (
			React.createElement("div", {className: "large-12 columns", style: cssContainer}, 
				React.createElement("h1", {style: cssText}, this.props.title)
			)
			);
	}
});
module.exports = TitlePage;