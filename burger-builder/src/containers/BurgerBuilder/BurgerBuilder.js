import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends React.Component {
	// constructor(props){
	// 	super(props);
	// 	this.state={}
	// }

	state = {
		ingredients: {
			salad: 2,
			bacon: 2,
			cheese: 1,
			meat: 3,
		},
	};

	render() {
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<div>Burger Controller</div>
			</Aux>
		);
	}
}

export default BurgerBuilder;
