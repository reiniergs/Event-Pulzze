var React = require('react');
var TitlePage = require('./titlepage.js');
var ProductList = require('./product-list.js');
var _ = require('underscore');

/* DATA */
var productsData = require('./../../../data/products.js');

var Products = React.createClass({displayName: 'Products',
	render : function () {
		return (
			React.createElement("div", {className: "row"}, 
				React.createElement(TitlePage, {title: this.props.title.slice(1,this.props.title.length)}), 
				React.createElement(ProductList, {list: productsData})
			)
			);
	}
});
module.exports = Products;