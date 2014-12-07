var React = require('react');


var TopBar = React.createClass({displayName: 'TopBar',
	render : function () {
		return (
			React.createElement("div", {className: "contain-to-grid"}, 
			  React.createElement("nav", {className: "top-bar", 'data-topbar': true, role: "navigation"}, 
				    React.createElement("ul", {className: "title-area"}, 
				        React.createElement("li", {className: "name"}, 
				            React.createElement("h1", null, React.createElement("a", {href: "#"}, this.props.name))
				        ), 
				        React.createElement("li", {className: "toggle-topbar menu-icon"}, React.createElement("a", {href: "#"}, React.createElement("span", null, "Menu")))
				    ), 
				    React.createElement("section", {className: "top-bar-section"}, 
				        React.createElement("ul", {className: "right"}, 
				            React.createElement("li", {className: "active"}, React.createElement("a", {href: "#home"}, "Home")), 
				            React.createElement("li", {className: "active"}, React.createElement("a", {href: "#products"}, "Products")), 
				            React.createElement("li", {className: "active"}, React.createElement("a", {href: "#grower"}, "Growers")), 
				            React.createElement("li", {className: "active"}, React.createElement("a", {href: "#contact"}, "Contact us"))
				        )
				    )
			    )
			)
			);
	}
});
module.exports = TopBar; 
