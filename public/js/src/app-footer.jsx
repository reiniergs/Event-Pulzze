var React = require('react');
var AppConfig  = require('./app-variables.js');
var Social = require('./socialv1.js'); 

var cssContainer = {
	textAlign : 'center',
	backgroundColor : AppConfig.bgSecColor,
	padding : '20px 0px 20px 0px'
};
var cssName = {
	color : AppConfig.bgMainColor,
	margin : '0px'
};

var AppFooter = React.createClass({
	render : function () {
		return (
			<footer style={cssContainer}>
				<p style={cssName}>© 2015 LATINOTRADING LLC.</p>
				<Social />
			</footer>
			);
	}
});
module.exports = AppFooter; 