export const addTask = (task) => {
    return {
      type: 'tasks/addTask', // Use a descriptive type
      payload: task,
    };
  };

export const deleteTask = (state, action) =>{
    return state.filter((task)=> task.id !== action.payload);
}