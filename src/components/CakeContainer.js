import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

// Main contianer

function CakeContainer(props) {
	return (
		<div>
			<h2>Number of Cakes: {props.numOfCakes} </h2>
			<button onClick={props.buyCake}>Buy Cakes</button>
		</div>
	);
}

// in this function state from redux store  is mapped to our component props
const mapStateToProps = (state) => {
	return {
		numOfCakes: state.numOfCakes,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: () => dispatch(buyCake()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
