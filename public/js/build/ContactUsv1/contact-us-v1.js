var React = require('react');
var Header = require('./header.js');
var ContactForm = require('./contact-form.js');
var Info = require('./info.js');
var GoogleMap = require('./google-map.js');

var ContactUs = React.createClass({displayName: 'ContactUs',
	getInitialState : function() {
		return { action : this.props.actions[0] }
	},
	getDefaultProps : function () {
		return {
			actions : ['Contact us','Info','Location']
		}
	},
	render : function () {
		switch (this.state.action) {
			case this.props.actions[0] :
				var Comp = React.createElement(ContactForm, null)
			break;
			case this.props.actions[1] :
				var Comp = React.createElement(Info, null)
			break;
			case this.props.actions[2] :
				var Comp = React.createElement(GoogleMap, null)
			break;
		}
		return (
			React.createElement("div", {className: "large-12 columns contactContainer"}, 
				React.createElement(Header, {actions: this.props.actions, cb: this.actionUpdated}), 
				React.createElement("div", {className: "content"}, 
				  Comp
				)
			)
			);
	},
	actionUpdated : function (action) {
		this.setState({ action : action });
	}
});
module.exports = ContactUs; 