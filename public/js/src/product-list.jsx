var React = require('react');
var Product = require('./product.js');
var _ = require('underscore');

var ProductList = React.createClass({
	render : function () {
		var list = _.map(this.props.list,function (item) {
			return (
				<li key={item.name}><Product data={item} /></li>
				);
		});
		return (
			<ul className="small-block-grid-1 large-block-grid-3">
  				{list}
			</ul>
			);
	}
});
module.exports = ProductList;