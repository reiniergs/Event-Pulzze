var React = require('react');
var Input = require('./input.js');
var TextArea = require('./textarea.js');

var contactForm  = React.createClass({
	render : function () {
		return (
			<form>
				<Input name="First Name" placeholder="First Name"/>
				<Input name="Last Name" placeholder="Last Name"/>
				<Input name="Email" placeholder="Email" type="email"/>
				<Input name="Phone" placeholder="Phone" />
				<TextArea name="Message" placeholder="Message"/>
				<div className="row">
			    	<div className="small-10 columns">
				        <div className="row">
					        <div className="small-3 columns">
					          <label for={this.props.name} className="right inline">{this.props.name}</label>
					        </div>
					        <div className="small-9 columns">
					          	<a href="#" className="button right success">Submit</a>
					        </div>
				      	</div>
			    	</div>
		    	</div>
			</form>
			); 
	}
});
module.exports = contactForm;