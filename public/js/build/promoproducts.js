var React = require('react');
var TitleHeader = require('./title-header.js');
var ProductList = require('./product-list.js');
var _ = require('underscore');

/* DATA */
var productsData = require('./../../../data/products.js');



var PromoProducts = React.createClass({displayName: 'PromoProducts',
	render : function () {
 		var listFiltered = _.where(productsData,{ promo : true });
 		return (
 			React.createElement("div", {className: "row"}, 
 				React.createElement("div", {className: "large-12 columns"}, 
 					React.createElement(TitleHeader, {icon: "fa-bullhorn", title: "Today's Deals", descrip: "New deals. Every day."}), 
 					React.createElement(ProductList, {list: listFiltered})
 				)
 			)
 			);
	}
});
module.exports = PromoProducts;