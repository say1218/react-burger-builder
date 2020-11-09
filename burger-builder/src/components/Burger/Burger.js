import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = ({ ingredients }) => {
	let transformedIngredients = Object.keys(ingredients)
		.map((igKey) => {
			return [...Array(ingredients[igKey])].map((_, i) => {
				return <BurgerIngredient key={igKey + i} type={igKey} />;
			});
		})
		.reduce((arr, elem) => {
			return arr.concat(elem);
		}, []);
	// console.log("ingredient list", transformedIngredients);

	if (!transformedIngredients.length) {
		transformedIngredients = <div>Please start adding ingrdients</div>;
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type='bread-top' />
			{transformedIngredients}
			<BurgerIngredient type='bread-bottom' />
		</div>
	);
};

export default burger;
