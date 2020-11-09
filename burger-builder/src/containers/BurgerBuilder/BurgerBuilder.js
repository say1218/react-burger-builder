import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

import { navigate } from "@reach/router";
import Modal from "../../components/UI/Modal/Modal";

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
};

class BurgerBuilder extends React.Component {
	// constructor(props){
	// 	super(props);
	// 	this.state={}
	// }

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 0,
		purchaseable: false,
		purchasing: false,
	};

	updatePurchaseState = (updatedIngredients) => {
		//let ingredientList = { ...this.state.ingredients };
		const sum = Object.keys(updatedIngredients)
			.map((elem) => {
				return updatedIngredients[elem];
			})
			.reduce((sum, el) => sum + el, 0);
		this.setState({ purchaseable: sum > 0 });
	};

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
		this.updatePurchaseState(updatedIngredients);
	};

	toggleModal = () => this.setState({ purchasing: !this.state.purchasing });

	purchaseContinued = () => {
		console.log("continue your amazing purchase");
	};

	render() {
		const disabledInfo = { ...this.state.ingredients };
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		console.log("disbaled inf", disabledInfo);

		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientsAdded={this.addIngredientHandler}
					ingredientsRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchaseable={this.state.purchaseable}
					ordered={this.toggleModal}
				/>
				{this.state.purchasing ? (
					<Modal>
						<OrderSummary
							ingredients={this.state.ingredients}
							price={this.state.totalPrice}
							purchaseCancelled={this.toggleModal}
							purchaseContinued={this.purchaseContinued}></OrderSummary>
					</Modal>
				) : null}
			</Aux>
		);
	}
}

export default BurgerBuilder;
