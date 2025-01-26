import axios from 'axios';
import { authServices } from './authServices';

const API_URL = 'https://67951992aad755a134eb34d4.mockapi.io/api';

export const taskService = {

  async getTasks(filters = {}) {
    try {
      const user = authServices.getCurrentUser();
      const response = await axios.get(`${API_URL}/Tasks`,  {
        params: {
          userId: user.id,
          ...filters,
        },
      });
      console.log(response.data); 
      return response.data;
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
      throw error;
    }
  },


  async createTask(taskData) {
    try {
      const user = authServices.getCurrentUser();
      const response = await axios.post(`${API_URL}/Tasks`, {
        ...taskData,
        userId: user.id,  
        createdAt: new Date().toISOString(),
      });
      return response.data;
    } catch (error) {
      console.error('Error al crear la tarea:', error);
      throw error;
    }
  },
  
  
  


  async updateTask(id, taskData) {
    try {
      const response = await axios.put(`${API_URL}/Tasks/${id}`, {
        ...taskData,
        updatedAt: new Date().toISOString(),
      });
      return response.data;
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
      throw error;
    }
  },


  async deleteTask(taskId) {
    try {
   
      const response = await axios.delete(`${API_URL}/Tasks/${taskId}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
      throw error;
    }
  }
  
  
  
};
