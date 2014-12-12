var React = require('react');

var InputPosFix = React.createClass({
	getDefaultProps : function () {
		return {
			icon : 'fa-search',
			placeholder : 'Search',
		}
	},
	render : function () {
		return (
			<div className="small-12 columns">
			    <div className="row collapse">
			        <div className="small-9 columns">
			          <input type="text" placeholder={this.props.placeholder} ref="input" onInput={this.onInput}/>
			        </div>
			        <div className="small-3 columns">
			          <span className="postfix"><i className={ 'fa ' + this.props.icon }></i></span>
			        </div>
			    </div>
		    </div>
			);
	},
	onInput : function () {
		this.props.cb(this.refs.input.getDOMNode().value);
	}
});
module.exports = InputPosFix;