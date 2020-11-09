import React from "react";
// import "./Button.module.css";

const Button = (props) => {
	const colors = {
		Success: "#5c9210",
		Danger: "#944317",
	};

	let style = {
		Button: {
			backgroundColor: "transparent",
			border: "none",
			outline: "none",
			cursor: "pointer",
			font: "inherit",
			padding: 10,
			margin: 10,
			fontWeight: "bold",
			color: `${colors[props.btnType]}`,
		},
	};

	return (
		<button
			// className={[classes.Button, classes[props.btnType]]}
			style={style.Button}
			onClick={props.clicked}>
			{props.children}
		</button>
	);
};

export default Button;
