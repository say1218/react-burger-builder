import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

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
				<BuildControls />
			</Aux>
		);
	}
}

export default BurgerBuilder;
