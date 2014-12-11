var React = require('react');
var variables = require('./app-variables.js');

var cssProduct = {
	textAlign : 'center',
	color : variables.textMainColor
};
var cssName = {
	color : variables.textMainColor  
}
var Product = React.createClass({
	render : function () {
		return (
			<div style={cssProduct}>
				
				<img src={this.props.data.img} /> 
				<h2 style={cssName}>{this.props.data.name}</h2>
				<p>{this.props.data.descrip}</p>
			</div>
			);
	}
});
module.exports = Product;