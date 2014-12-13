var React = require('react');

var Header = React.createClass({
	render : function () {
		var list = this.props.actions.map(function (item) {
			return (
				<li key={item}><a onClick={this.onClick}>{item}</a></li>
				);
		}.bind(this));
		return (
			<ul className="header">
				{list}
			</ul>
			);
	},
	onClick : function (e) {
		this.props.cb(e.target.text)
	}
});
module.exports = Header;