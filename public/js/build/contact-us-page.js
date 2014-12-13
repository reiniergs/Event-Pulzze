var React = require('react');
var Title = require('./titlepage.js');
var ContactUs = require('./ContactUsv1/contact-us-v1.js'); 

var ContactPage = React.createClass({displayName: 'ContactPage',
	render : function () {
		return (
			React.createElement("div", {className: "row"}, 
				React.createElement(Title, {title: "Contact us"}), 
				React.createElement(ContactUs, null)
			)	
		)
	}
});
module.exports = ContactPage;