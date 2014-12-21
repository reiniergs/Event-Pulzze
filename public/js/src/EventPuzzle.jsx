var React = require('react');
var _ = require('underscore');
var TimeLine = require('./TimeLine.js');
var Event = require('./Event.js');

var puzzleContainer = {
	padding : '0px',
	marginTop : '30px',
	position : 'relative'
}

var puzzleCSS = {
	width  : '620px',
	height : '720px',
	backgroundColor : '#ececec',
	padding : '0px 10px',
	display : 'inline-block',
	position : 'absolute',
	top  	: '0px'
}

Array.prototype.remove = function (index) {
	this.splice(index,1);
	return this;
}

var EventPuzzle = React.createClass({
	render : function () {
		this.props.events.forEach(function (event,ekey) {
				delete event.width;
				delete event.left;
			});
		this.reCalc();
		var key = 0;
		var renderList = this.props.events.map(function (event) {
			return {
				top : event.start,
				height : event.end - event.start,
				name : 'Sample Item',
				location : 'Sample Location',
				width : event.width,
				left : event.left,
				key : this.props.events.indexOf(event)
			} 
		}.bind(this));
		var events = renderList.map(function (event) {
 			return (
 				<Event data={event} key={event.key} cb={this.removeEvent} index={event.key}/>
 				);
 		}.bind(this));
		return (
			<div style={puzzleContainer}>
				<TimeLine />
				<div style={puzzleCSS}>
					{events}
				</div>
			</div>	
			);
	}, 
	reCalc : function () {
		// *************************
		// Sort Events TOP to BOTTOM
		// *************************
		this.props.events.sort(function (a,b) {
			return a.start - b.start;
		});
		var eq = [];
		this.props.events.forEach(function (event,key) {
			for (var px = event.start; px <= event.end; px++) {
				eq[px] = eq[px] || [];
				eq[px].push(key); 
			}	
		});
		eq = _.uniq(eq,function (item) {
			return JSON.stringify(item)
		}).sort(function (a,b) {
			return b.length - a.length;
		});
		this.resolveEq(eq.remove(eq.indexOf(undefined)));
	},
	resolveEq : function (eq) {
		var total,left, pos;
		eq.forEach(function (fn,fnKey) {
			var tmpFn = _.clone(fn);
			total = 600;
			padding = 0;
			fn.forEach(function (event,eKey) {
				if(this.props.events[event].width) {
					if (this.props.events[event].left == padding) {
						padding = this.props.events[event].left + this.props.events[event].width;
					}
					total = total - this.props.events[event].width;
				 	tmpFn.remove(tmpFn.indexOf(event)); 
				}
			}.bind(this));
			fn = _.clone(tmpFn);
			fn.forEach(function (event,eKey) {
				this.props.events[event].width = total / fn.length; 
				this.props.events[event].left = eKey * this.props.events[event].width + padding;
			}.bind(this));
		}.bind(this)); 
	},
	removeEvent : function (index) {
		this.props.cb(index);
	}


});
module.exports = EventPuzzle;


