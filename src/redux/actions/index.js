export const addTask = (task) => {
    return {
      type: 'tasks/addTask', // Use a descriptive type
      payload: task,
    };
  };