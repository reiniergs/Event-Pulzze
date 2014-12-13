var React = require('react');
var Map = require('./map.js');  

var cssContainer = {
	margin : '0px 15px',
	height : '500px',
	backgroundColor : '#ccc'
}
var GoogleMap = React.createClass({displayName: 'GoogleMap', 
	render : function () {
		return (
				React.createElement("div", {style: cssContainer, ref: "container"}, 
				    React.createElement(Map, {latitude: 25.779340, longitude: -80.275419, zoom: 15, width: 800, height: 500, 
  points: [{latitude:25.779340,longitude:-80.275419,title:"Sara y Rey Home"},]})
				)      
			);
	}
});
module.exports = GoogleMap;