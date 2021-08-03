import React,{createContext,useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';

const AppReducer = (state, action) => {
	switch (action.type) {
    case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};

		case 'SET_BUDGET':
			return {
				...state,
				budget: action.payload,
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter((expense) => expense.id !== action.payload),
			};
		
		default:
			return state;
	}
};

const initialState = {
	budget: '2000',
	expenses: [
		{ id: uuidv4(), name: 'Shopping', cost: 40 },
		{ id: uuidv4(), name: 'Holiday', cost: 400 },
		{ id: uuidv4(), name: 'Car service', cost: 50 },
		{ id: uuidv4(), name: 'Fuel', cost: 40 },
		{ id: uuidv4(), name: 'Child Care', cost: 500 },
	],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};