var React = require('react');
var TitleHeader = require('./../title-header.js');

var Info = React.createClass({displayName: 'Info',
	render : function () {
		return (
			React.createElement("div", {className: "row info"}, 
				React.createElement("div", {className: "small-8 columns"}, 
				    React.createElement("h2", null, "Phone : +1 305 555 4444"), 
				    React.createElement("h2", {className: "last"}, "Address : 14834 SW 26th ST, Miami, FL 33137"), 
				    React.createElement(TitleHeader, {icon: "fa-globe", title: "Who we are", descrip: "Latinotrading.com short descript "}), 
				    React.createElement("p", null, "Latinotrading.com is an company provinding a Donec" + ' ' + 
				    "sed odio dui. Etiam porta sem malesuada magna mollis" + ' ' +
				     "euismod. Nullam id dolor id nibh ultricies vehicula" + ' ' +
				      "ut id elit. Morbi leo risus, porta ac consectetur" + ' ' + 
				      "ac, vestibulum at eros. Praesent commodo cursus" + ' ' + 
				      "magna.")
				)
		    )
			);
	}
});
module.exports = Info;