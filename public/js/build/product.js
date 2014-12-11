var React = require('react');
var variables = require('./app-variables.js');

var cssProduct = {
	textAlign : 'center',
	color : variables.textMainColor
};
var cssName = {
	color : variables.textMainColor  
}
var Product = React.createClass({displayName: 'Product',
	render : function () {
		return (
			React.createElement("div", {style: cssProduct}, 
				
				React.createElement("img", {src: this.props.data.img}), 
				React.createElement("h2", {style: cssName}, this.props.data.name), 
				React.createElement("p", null, this.props.data.descrip)
			)
			);
	}
});
module.exports = Product;