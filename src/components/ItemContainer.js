import React from "react";
import { connect } from "react-redux";

function ItemContainer(props) {
	return (
		<div>
			<h2>Item :{props.item} </h2>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => {
	const itemState = ownProps.cake
		? state.cake.numOfCakes // ownPorps.cake checks that if cake prop is sent thruogh app.js or not
		: state.iceCream.numOfIceCreams;

	return {
		item: itemState,
	};
};

export default connect(mapStateToProps)(ItemContainer);
