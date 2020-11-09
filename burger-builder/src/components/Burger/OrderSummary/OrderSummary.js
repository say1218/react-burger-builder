import React from "react";
import classes from "./OrderSummary.module.css";

const orderSummary = ({
	ingredients,
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
			<div>Continue to Checkout?</div>

			<button onClick={purchaseCancelled}>CANCEL</button>
			<button onClick={purchaseContinued}>CONTINUE</button>
		</div>
	);
};

export default orderSummary;
