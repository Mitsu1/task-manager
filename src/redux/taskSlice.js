import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
	name: 'tasks',
	initialState: [],
	reducers: {
    getTasks: (state, action) => {
      action.payload.map((data) => {
        return state.push(data);
      })
    },
		createTask: (state, action) => {
			const task = {
				id: action.payload.id+1,
				name: action.payload.name,
				description: action.payload.description,
				status: 0,
				tag: action.payload.tag,
			};
			state.push(task);
		}
	},
});

export const { getTasks, createTask } = taskSlice.actions;

export default taskSlice.reducer;