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
			state.push(action.payload);
		}
	},
});

export const { getTasks, createTask } = taskSlice.actions;

export default taskSlice.reducer;