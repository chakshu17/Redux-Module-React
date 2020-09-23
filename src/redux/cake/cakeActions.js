import { BUY_CAKE } from "./cakeTypes";
// Defining of action.
export const buyCake = (number = 1 ) => {
	return {
		type: BUY_CAKE,
		payload:number
	};
};
