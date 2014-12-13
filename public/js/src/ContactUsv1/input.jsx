var React = require('react');

var Input = React.createClass({
	getDefaultProps : function () {
		return {
			name : '',
			placeholder : '',
			type : 'text'
		};
	},
	render : function () {
		return (
			<div className="row">
			    <div className="small-10 columns">
				        <div className="row">
					        <div className="small-3 columns">
					          <label for={this.props.name} className="right inline">{this.props.name}</label>
					        </div>
				        <div className="small-9 columns">
				          	<input type={this.props.type} id={this.props.name} placeholder={this.props.placeholder} />
				        </div>
				      </div>
			    </div>
		    </div>
			);
	}
});
module.exports = Input;