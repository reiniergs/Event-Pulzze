var React = require('react');

var Input = React.createClass({displayName: 'Input',
	getDefaultProps : function () {
		return {
			name : '',
			placeholder : '',
			type : 'text'
		};
	},
	render : function () {
		return (
			React.createElement("div", {className: "row"}, 
			    React.createElement("div", {className: "small-10 columns"}, 
				        React.createElement("div", {className: "row"}, 
					        React.createElement("div", {className: "small-3 columns"}, 
					          React.createElement("label", {for: this.props.name, className: "right inline"}, this.props.name)
					        ), 
				        React.createElement("div", {className: "small-9 columns"}, 
				          	React.createElement("input", {type: this.props.type, id: this.props.name, placeholder: this.props.placeholder})
				        )
				      )
			    )
		    )
			);
	}
});
module.exports = Input;