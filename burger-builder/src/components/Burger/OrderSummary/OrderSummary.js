import React from "react";
import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const orderSummary = ({
	ingredients,
	price,
	purchaseCancelled,
	purchaseContinued,
}) => {
	let ingredientsList = Object.keys(ingredients).map((elem) => (
		<li key={elem}>
			{elem} : {ingredients[elem]}
		</li>
	));
	return (
		<div className={classes.orderSummary}>
			<h3>Your Order</h3>
			<p>Here's your awesome burger!</p>
			<ul>{ingredientsList}</ul>
			<div>
				<strong>Price: ${price.toFixed(2)}</strong>
			</div>
			<div>Continue to Checkout?</div>

			<Button clicked={purchaseCancelled} btnType='Danger'>
				CANCEL
			</Button>
			<Button clicked={purchaseContinued} btnType='Success'>
				CONTINUE
			</Button>
		</div>
	);
};

export default orderSummary;
