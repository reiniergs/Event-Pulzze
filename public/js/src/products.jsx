var React = require('react');
var TitlePage = require('./titlepage.js');
var ProductList = require('./product-list.js');
var _ = require('underscore');

/* DATA */
var productsData = require('./../../../data/products.js');

var Products = React.createClass({
	render : function () {
		return (
			<div className="row">
				<TitlePage title={this.props.title.slice(1,this.props.title.length)} />
				<ProductList list={productsData} />
			</div>
			);
	}
});
module.exports = Products;