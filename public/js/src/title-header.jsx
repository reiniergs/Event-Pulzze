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


var TitleHeader = React.createClass({
	render : function () {
      	return (
	      	<div style={cssContainer}>
	      		<i className={ 'fa ' + this.props.icon } style={cssIcon}></i>
	      		<div style={cssText}>
		   			<div style={cssTitle}>{this.props.title}</div>
		   			<div style={cssDescrip}>{this.props.descrip}</div>
		   		</div>	
	      	</div>
	      	); 
	}
});
module.exports = TitleHeader;