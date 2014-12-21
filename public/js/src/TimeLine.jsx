var React = require('react');
var moment = require('moment');


var timelineCSS = {
	display : 'inline-block',
	margin  : '0px 5px 0px 30px',
	padding : '0px',
	position : 'relative',
	width : '100px',
	height : '720px',
	padding : '0px',
	textAlign : 'right'
}


var aCSS = {
	fontSize : '10px',
	color : '#ccc'
}

var Time = React.createClass({
	render : function () {
		var timeCSS= {
				fontSize : '16px',
				position : 'absolute',
				margin   : '0px',
				top      : this.props.time.diff(this.props.start,'minutes') - 15  + 'px',
				right 	 : '0px'	

			};
		if (this.props.time.format('mm') == '00') {
			return (
				<h1 style={timeCSS}>
					{this.props.time.format('h:mm')}
					<span style={aCSS}> {this.props.time.format('A')}</span>
				</h1>
				);
		} else {
			return (
				<h1 style={timeCSS}>
					<span style={aCSS}>{this.props.time.format('h:mm')}</span>
				</h1>
				);
		}	
	}

});

var TimeLine = React.createClass({
	getDefaultProps : function () {
		return { start : moment('9:00 am','hh:mm a') }
	},
	render : function () {
		var Times = [];
		var start = moment(this.props.start);
		for (var i = 1; i <= 25; i++) {
			Times.push(<Time time={start} start={this.props.start} key={i}/>);
			start = moment(start).add(30,'minutes');
		}
		return (
			<div style={timelineCSS}> 
				{Times}
			</div>
			);
	}
});


module.exports = TimeLine;