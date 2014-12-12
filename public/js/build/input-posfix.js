var React = require('react');

var InputPosFix = React.createClass({displayName: 'InputPosFix',
	getDefaultProps : function () {
		return {
			icon : 'fa-search',
			placeholder : 'Search',
		}
	},
	render : function () {
		return (
			React.createElement("div", {className: "small-12 columns"}, 
			    React.createElement("div", {className: "row collapse"}, 
			        React.createElement("div", {className: "small-9 columns"}, 
			          React.createElement("input", {type: "text", placeholder: this.props.placeholder, ref: "input", onInput: this.onInput})
			        ), 
			        React.createElement("div", {className: "small-3 columns"}, 
			          React.createElement("span", {className: "postfix"}, React.createElement("i", {className:  'fa ' + this.props.icon}))
			        )
			    )
		    )
			);
	},
	onInput : function () {
		this.props.cb(this.refs.input.getDOMNode().value);
	}
});
module.exports = InputPosFix;