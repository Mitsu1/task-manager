import axios from 'axios';

export const Task = async () => {
  try {
    const res = await axios.get(`http://localhost/TaskManager/tasks.php`);
    return { body } = res.data;
    
  } catch (error) {
    console.error(error);
  }
};