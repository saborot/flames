import { CHANGE_NAME_1, CHANGE_NAME_2, COMPUTE_SCORES } from './constants';

export const setName1 = (text) => ({
	type: CHANGE_NAME_1,
	payload: text
})

export const setName2 = (text) => ({
	type: CHANGE_NAME_2,
	payload: text
})

export const computeScores = (scores) => ({
	type: COMPUTE_SCORES,
	payload: scores
})