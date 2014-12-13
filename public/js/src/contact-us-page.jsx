var React = require('react');
var Title = require('./titlepage.js');
var ContactUs = require('./ContactUsv1/contact-us-v1.js'); 

var ContactPage = React.createClass({
	render : function () {
		return (
			<div className="row">
				<Title title="Contact us" />
				<ContactUs />
			</div>	
		)
	}
});
module.exports = ContactPage;