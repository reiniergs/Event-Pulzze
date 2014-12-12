var React = require('react');
var TitlePage = require('./titlepage.js');
var ProductList = require('./product-list.js');
var InputPosFix = require('./input-posfix.js');
var _ = require('underscore');

/* DATA */
var productsData = require('./../../../data/products.js');

var Products = React.createClass({
	getInitialState : function () {
		return {
			filter : ''
		}
	},
	render : function () {
		var listFiltered = _.filter(productsData,function (item) {
			var re = new RegExp(this.state.filter); 
			return re.test(item.name);
		}.bind(this))
		return (
			<div className="row">
				<TitlePage title={this.props.title.slice(1,this.props.title.length)} />
				<div className="large-4 columns right">
					<InputPosFix cb={this.filter}/>
				</div>	
				<ProductList list={listFiltered} />
			</div>

			);
	},
	filter : function (text) {
		this.setState({ filter : text });

	}
});
module.exports = Products;