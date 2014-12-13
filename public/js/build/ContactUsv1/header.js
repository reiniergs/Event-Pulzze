var React = require('react');

var Header = React.createClass({displayName: 'Header',
	render : function () {
		var list = this.props.actions.map(function (item) {
			return (
				React.createElement("li", {key: item}, React.createElement("a", {onClick: this.onClick}, item))
				);
		}.bind(this));
		return (
			React.createElement("ul", {className: "header"}, 
				list
			)
			);
	},
	onClick : function (e) {
		this.props.cb(e.target.text)
	}
});
module.exports = Header;