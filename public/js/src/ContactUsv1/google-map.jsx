var React = require('react');
var Map = require('./map.js');  

var cssContainer = {
	margin : '0px 15px',
	height : '500px',
	backgroundColor : '#ccc'
}
var GoogleMap = React.createClass({ 
	render : function () {
		return (
				<div style={cssContainer} ref="container">
				    <Map latitude={25.779340} longitude={-80.275419} zoom={15} width={800} height={500}
  points={[{latitude:25.779340,longitude:-80.275419,title:"Sara y Rey Home"},]} />
				</div>      
			);
	}
});
module.exports = GoogleMap;