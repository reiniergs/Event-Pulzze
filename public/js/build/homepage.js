var React = require('react');
var TitlePage = require('./titlepage.js');
var Orbit = require('./orbit.js');
var PromoProducts = require('./promoproducts.js'); 

var HomePage = React.createClass({displayName: 'HomePage',
 	render : function () {
 		return (
 			React.createElement("div", {className: "row"}, 
 				React.createElement(Orbit, null), 
 				React.createElement(PromoProducts, null)
 			)
 			);
 	}
});
module.exports = HomePage;