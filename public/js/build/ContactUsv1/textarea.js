var React = require('react');

var TextArea = React.createClass({displayName: 'TextArea',
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
				          	React.createElement("textarea", {id: this.props.name, placeholder: this.props.placeholder})
				        )
				      )
			    )
		    )
			);
	}
});
module.exports = TextArea;