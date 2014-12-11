var React = require('react');

var AppFooter = React.createClass({displayName: 'AppFooter',
	render : function () {
		return (
			React.createElement("footer", null, 
				React.createElement("p", null, "© 2015 LATINOTRADING LLC.")
			)
			);
	}
});
module.exports = AppFooter;