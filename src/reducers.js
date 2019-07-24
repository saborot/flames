import { CHANGE_NAME_1, CHANGE_NAME_2, COMPUTE_SCORES } from './constants';

const initialState = {
	name_1: '',
	name_2: '',
	name_1_score: 0,
	name_2_score: 0,
	total_score: 0,
}

export const flameOn = (state = initialState, action = {}) => {

	console.log('ACTION == ', action.payload);
	switch(action.type) {
		case CHANGE_NAME_1:
			return Object.assign({}, state, { name_1: action.payload });
		case CHANGE_NAME_2:
			return Object.assign({}, state, { name_2: action.payload });
		case COMPUTE_SCORES:
			console.log(state);
			return Object.assign({}, state, {
				name_1_score: action.payload.name_1_score,
				name_2_score: action.payload.name_2_score,
				total_score: action.payload.total_score,
			});
		default:
			return state;
	}
}