var React = require('react');
var TitlePage = require('./titlepage.js');
var Orbit = require('./orbit.js');
var PromoProducts = require('./promoproducts.js'); 

var HomePage = React.createClass({
 	render : function () {
 		return (
 			<div className="row">
 				<Orbit />
 				<PromoProducts  />
 			</div>
 			);
 	}
});
module.exports = HomePage;