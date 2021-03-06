var React = require('react');

var Event = React.createClass({displayName: 'Event',
	getInitialState : function () {
		return { over : false };
	},
	render : function () {
		var eventCSS = {
			width : this.props.data.width + 'px',
			height : this.props.data.height + 'px',
			border : '1px solid #ccc',
			position : 'absolute',
			top : this.props.data.top,
			left : this.props.data.left + 'px',
			backgroundColor : 'white',
			padding : '5px 0px 0px 15px',
			marginLeft : '10px',
			overflow : 'hidden',
			opacity : this.state.over ? 0.5 : 1
		}
		var nameCSS = {
			fontSize : '16px',
			margin : '0px',
			color : '#3a5795'
		};
		var locationCSS = {
			fontSize : '10px',
			margin : '0px',
			color : '#ccc'
		}; 
		var removeCSS = {
			display : this.state.over ? 'block' : 'none'
		}
		return (
			React.createElement("div", {style: eventCSS, className: "event", onMouseEnter: this.onEnter, onMouseLeave: this.onLeave}, 
				React.createElement("h2", {style: nameCSS}, this.props.data.name), 
				React.createElement("h3", {style: locationCSS}, this.props.data.location), 
				React.createElement("span", {style: removeCSS, className: "removeLink", onClick: this.onClick}, "Remove")
			)
			);
	},
	onEnter : function () {
		this.setState({ over : true });
	},
	onLeave : function () {
		this.setState({ over : false });
	},
	onClick : function () {
		this.props.cb(this.props.index);
	}
});
module.exports = Event;