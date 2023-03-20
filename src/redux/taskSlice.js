import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
	name: 'tasks',
	initialState: [
    {id: "1",
    name: "Mi primer Redux State",
    description: "Este es el initialState",
    status: 0,
    tag: "frontend"}],
	reducers: {
		createTask: (state, action) => {
			const task = {
				id: 20,
				name: action.payload.name,
				description: action.payload.description,
				status: 0,
				tag: action.payload.tag,
			};
			state.push(task);
		},
	},
});


export const { createTask } = taskSlice.actions;

export default taskSlice.reducer;