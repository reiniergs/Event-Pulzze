var React = require('react');
var Product = require('./product.js');
var _ = require('underscore');

var ProductList = React.createClass({displayName: 'ProductList',
	render : function () {
		var list = _.map(this.props.list,function (item) {
			return (
				React.createElement("li", {key: item.name}, React.createElement(Product, {data: item}))
				);
		});
		return (
			React.createElement("ul", {className: "small-block-grid-1 large-block-grid-3"}, 
  				list
			)
			);
	}
});
module.exports = ProductList;