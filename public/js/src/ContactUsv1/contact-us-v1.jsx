var React = require('react');
var Header = require('./header.js');
var ContactForm = require('./contact-form.js');
var Info = require('./info.js');
var GoogleMap = require('./google-map.js');

var ContactUs = React.createClass({
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
				var Comp = <ContactForm />
			break;
			case this.props.actions[1] :
				var Comp = <Info />
			break;
			case this.props.actions[2] :
				var Comp = <GoogleMap />
			break;
		}
		return (
			<div className="large-12 columns contactContainer">
				<Header actions={this.props.actions} cb={this.actionUpdated}/>
				<div className="content">
				  {Comp}
				</div>
			</div>
			);
	},
	actionUpdated : function (action) {
		this.setState({ action : action });
	}
});
module.exports = ContactUs; 