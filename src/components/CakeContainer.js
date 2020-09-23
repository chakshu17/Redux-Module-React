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
// when you want to access the reduc state in your component you define map state to props funtion
// it get redux state as a parameter , which can be used to retrieve the appropiate state properties
const mapStateToProps = (state) => {
	return {
		numOfCakes: state.cake.numOfCakes,
	};
};
// for diapacthing options,
// this function gets dispatch method as a paramter and allows us to map action creaters in our component

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: () => dispatch(buyCake()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
// connect () connect redux components to redux door. ie. coonect container cake to redux door