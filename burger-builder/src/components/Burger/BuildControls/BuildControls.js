import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Bacon", type: "bacon" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Meat", type: "meat" },
];

const buildControls = (props) => (
	<div className={classes.BuildControls}>
		<div>
			Price :<strong>{props.price.toFixed(2)}</strong>
		</div>
		{controls.map((ctrl) => (
			<BuildControl
				key={ctrl.label}
				label={ctrl.label}
				type={ctrl.type}
				disabled={props.disabled[ctrl.type]}
				added={() => props.ingredientsAdded(ctrl.type)}
				removed={() => props.ingredientsRemoved(ctrl.type)}></BuildControl>
		))}
		<button className={classes.OrderButton} disabled={!props.purchaseable}>
			ORDER NOW
		</button>
	</div>
);

export default buildControls;
