var React = require('react');
var variables = require('./app-variables.js');

var cssContainer = {
    fontSize : '25px',
	borderBottom : '1px solid',
	marginBottom: '20px',
	paddingBottom : '10px'
};
var cssDescrip = {
	fontSize: '16px',
};	
var cssIcon = {
	fontSize: '51px',
    display: 'inline-block',
    position: 'relative',
	top: '-3px',
	color : variables.bgMainColor
}; 
var cssTitle = {
	fontSize : '30px',
};
var cssText = {
	display : 'inline-block',
	marginLeft : '5px',
	color : variables.textMainColor
}; 


var TitleHeader = React.createClass({displayName: 'TitleHeader',
	render : function () {
      	return (
	      	React.createElement("div", {style: cssContainer}, 
	      		React.createElement("i", {className:  'fa ' + this.props.icon, style: cssIcon}), 
	      		React.createElement("div", {style: cssText}, 
		   			React.createElement("div", {style: cssTitle}, this.props.title), 
		   			React.createElement("div", {style: cssDescrip}, this.props.descrip)
		   		)	
	      	)
	      	); 
	}
});
module.exports = TitleHeader;