var $ = require('jquery'); 
var _ = require('underscore');
var React = require('react');
var Backbone = require('backbone'); 

var EventPuzzle = require('./EventPuzzle.js'); 
    
var data = [{start: 30, end: 150}];
//{start: 560, end: 620} 
// {start: 560, end: 620}, {start: 540, end: 600}, {start: 30, end: 150},{start: 30, end: 150}, {start: 610, end: 670},{start: 560, end: 620}, {start: 560, end: 620}, {start: 540, end: 600}, {start: 30, end: 150}, {start: 610, end: 670},{start : 0, end : 680},{start : 0, end : 680},{start : 200, end : 250},{start : 100, end : 300}

var App = React.createClass({displayName: 'App',
	getInitialState : function () {
        return { events : data.length };
	},
	componentDidMount : function () {
		
	},
	render : function () {
	    return (
	    	React.createElement("div", {className: "appContainer"}, 
		      	React.createElement(EventPuzzle, {events: data, cb: this.removeEvent}), 
		      	React.createElement("div", {className: "eventMenu"}, 
					React.createElement("form", null, 
						React.createElement("h4", null, "Add event:"), 
						React.createElement("label", null, "Start :"), 
						React.createElement("input", {name: "start", ref: "start"}), 
						React.createElement("label", null, "End :"), 
						React.createElement("input", {name: "end", ref: "end"}), React.createElement("br", null), 
						React.createElement("button", {type: "button", onClick: this.addEvent}, "Add")
					)	
				)
		    )  	
	    );  	
	},
	addEvent : function (e) {
		var start = this.refs.start.getDOMNode().value;
		var end = this.refs.end.getDOMNode().value;
		if (!isNaN(start) && !isNaN(end) && start.length > 0 && end.length > 0) {
			start = Number(start);
			end = Number(end);
			if (end >= start) {
				data.push({ start : start, end : end });
				this.setState({ event: data.length });
			} else alert('Start > End');	
		} else alert('Event data need to be Numbers');
	},
	removeEvent : function (index) {
		data.remove(index);
		this.setState({ events : data.length });
	}
}); 


$(document).ready(function () {
    
    React.render(
		React.createElement(App, null),
	   	document.getElementById('app') 
	); 

});
