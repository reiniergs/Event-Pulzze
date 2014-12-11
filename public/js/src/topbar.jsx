var React = require('react');


var TopBar = React.createClass({
	render : function () {
		var cssName = {
				fontSize : '40px'
			};
		return (
			<div className="">
			  <nav className="top-bar" data-topbar role="navigation">
				    <ul className="title-area">
				        <li className="name">
				            <h1><a href="#" style={cssName}>{this.props.name}</a></h1>
				        </li>
				        <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
				    </ul>
				    <section className="top-bar-section">
				        <ul className="right">
				            <li className="active"><a href="#home">Home</a></li>
				            <li className="active"><a href="#products">Products</a></li>
				            <li className="active"><a href="#grower">Growers</a></li>
				            <li className="active"><a href="#contact">Contact us</a></li>
				        </ul>
				    </section>
			    </nav>
			</div>
			);
	}
});
module.exports = TopBar; 
