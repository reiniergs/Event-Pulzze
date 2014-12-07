var React = require('react');

var Products = React.createClass({displayName: 'Products',
	render : function () {
		return (
			React.createElement("h2", null, "Products content!")
			);
	}
});
module.exports = Products;