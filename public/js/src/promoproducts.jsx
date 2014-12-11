var React = require('react');
var TitleHeader = require('./title-header.js');
var ProductList = require('./product-list.js');
var _ = require('underscore');

/* DATA */
var productsData = require('./../../../data/products.js');



var PromoProducts = React.createClass({
	render : function () {
 		var listFiltered = _.where(productsData,{ promo : true });
 		return (
 			<div className="row">
 				<div className="large-12 columns">
 					<TitleHeader icon="fa-bullhorn" title="Today's Deals" descrip="New deals. Every day."/>
 					<ProductList list={listFiltered}/>
 				</div>
 			</div>
 			);
	}
});
module.exports = PromoProducts;