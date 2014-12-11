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
var Social =React.createClass({
	defaultProp : function () {
		return {
			facebook : '#',
			twitter  : '#',
			google   : '#'
		};
	},
	render : function () {
		return (	
			<ul style={cssList}>
				<li style={cssItem}><a href={this.props.facebook} style={cssA}><i className="fa fa-facebook-square"></i></a></li>
				<li style={cssItem}><a href={this.props.twitter} style={cssA}><i className="fa fa-twitter-square"></i></a></li>
				<li style={cssItem}><a href={this.props.google} style={cssA}><i className="fa fa-google-plus-square"></i></a></li>
			</ul>
			);
	}
}); 
module.exports = Social;