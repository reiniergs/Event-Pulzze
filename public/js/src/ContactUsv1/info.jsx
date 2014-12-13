var React = require('react');
var TitleHeader = require('./../title-header.js');

var Info = React.createClass({
	render : function () {
		return (
			<div className="row info">
				<div className="small-8 columns">
				    <h2>Phone : +1 305 555 4444</h2>
				    <h2 className="last">Address : 14834 SW 26th ST, Miami, FL 33137</h2>
				    <TitleHeader icon="fa-globe" title="Who we are" descrip="Latinotrading.com short descript "/>
				    <p>Latinotrading.com is an company provinding a Donec 
				    sed odio dui. Etiam porta sem malesuada magna mollis
				     euismod. Nullam id dolor id nibh ultricies vehicula
				      ut id elit. Morbi leo risus, porta ac consectetur 
				      ac, vestibulum at eros. Praesent commodo cursus 
				      magna.</p>
				</div>      
		    </div>
			);
	}
});
module.exports = Info;