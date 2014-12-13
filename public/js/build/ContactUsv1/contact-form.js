var React = require('react');
var Input = require('./input.js');
var TextArea = require('./textarea.js');

var contactForm  = React.createClass({displayName: 'contactForm',
	render : function () {
		return (
			React.createElement("form", null, 
				React.createElement(Input, {name: "First Name", placeholder: "First Name"}), 
				React.createElement(Input, {name: "Last Name", placeholder: "Last Name"}), 
				React.createElement(Input, {name: "Email", placeholder: "Email", type: "email"}), 
				React.createElement(Input, {name: "Phone", placeholder: "Phone"}), 
				React.createElement(TextArea, {name: "Message", placeholder: "Message"}), 
				React.createElement("div", {className: "row"}, 
			    	React.createElement("div", {className: "small-10 columns"}, 
				        React.createElement("div", {className: "row"}, 
					        React.createElement("div", {className: "small-3 columns"}, 
					          React.createElement("label", {for: this.props.name, className: "right inline"}, this.props.name)
					        ), 
					        React.createElement("div", {className: "small-9 columns"}, 
					          	React.createElement("a", {href: "#", className: "button right success"}, "Submit")
					        )
				      	)
			    	)
		    	)
			)
			); 
	}
});
module.exports = contactForm;