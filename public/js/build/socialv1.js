var React = require('react');
var AppConfig = require('./app-variables.js');

var cssList = {
	listStyle : 'none'
};
var cssItem = { 
	display : 'inline',
	margin : '0px 5px',
	fontSize : '35px',
};
var cssA = {
	color: AppConfig.textMainColor
}
var Social =React.createClass({displayName: 'Social',
	defaultProp : function () {
		return {
			facebook : '#',
			twitter  : '#',
			google   : '#'
		};
	},
	render : function () {
		return (	
			React.createElement("ul", {style: cssList}, 
				React.createElement("li", {style: cssItem}, React.createElement("a", {href: this.props.facebook, style: cssA}, React.createElement("i", {className: "fa fa-facebook-square"}))), 
				React.createElement("li", {style: cssItem}, React.createElement("a", {href: this.props.twitter, style: cssA}, React.createElement("i", {className: "fa fa-twitter-square"}))), 
				React.createElement("li", {style: cssItem}, React.createElement("a", {href: this.props.google, style: cssA}, React.createElement("i", {className: "fa fa-google-plus-square"})))
			)
			);
	}
}); 
module.exports = Social;