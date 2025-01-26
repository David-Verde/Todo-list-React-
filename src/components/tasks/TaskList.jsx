import React, { useState, useEffect } from "react";
import { taskService } from "../services/taskService";
import { Dropdown } from "flowbite-react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setTasks, onEditTask }) => {
  const [filters, setFilters] = useState({});
  const [originalTasks, setOriginalTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await taskService.getTasks(filters);
        setTasks(fetchedTasks);
        setOriginalTasks(fetchedTasks);
      } catch (error) {
        console.error("Error al obtener las tareas:", error);
      }
    };
    fetchTasks();
  }, [filters, setTasks]);


  const handleFilter = (status) => {
    if (status === "reset") {
      setFilters({});
    } else {
      setFilters({ status }); 
    }
  };



  const handleUpdateTask = async (updatedTask) => {
    try {
      const response = await taskService.updateTask(updatedTask.id, updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === response.id ? response : task))
      );
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await taskService.deleteTask(taskId);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
    }
  };

  return (
    <div>
      <div className="mb-4 flex space-x-2">
        <Dropdown label="Filtrar">
          <Dropdown.Item onClick={() => handleFilter("pendiente")}>
            Pendientes
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilter("completada")}>
            Completadas
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilter("reset")}>
            Restablecer Filtro
          </Dropdown.Item>
        </Dropdown>

      </div>

      <div className="grid grid-cols-1 gap-4">
        {tasks?.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdate={handleUpdateTask}
            onDelete={() => handleDeleteTask(task.id)}
            onEdit={() => onEditTask(task)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
