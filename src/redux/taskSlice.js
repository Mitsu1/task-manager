import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
	name: 'tasks',
	initialState: [
        {id: "1",
        name: "Mi primer Redux State",
        description: "Este es el initialState",
        status: "1",
        tag: "frontend"}],
	reducers: {
		addTask: (state, action) => {
			const task = {
				id: new Date(),
				title: action.payload.title,
				completed: false,
			};
			state.push(task);
		},

	},
});


export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;