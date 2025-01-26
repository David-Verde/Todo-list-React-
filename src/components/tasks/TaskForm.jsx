import React, { useState } from "react";
import { taskService } from "../services/taskService";
import { Button, Select, TextInput, Modal } from "flowbite-react";
import toast from "react-hot-toast";

const TaskForm = ({ onTaskCreated, taskToEdit, show, onClose }) => {
  const [taskData, setTaskData] = useState({
    title: taskToEdit?.title || "",
    description: taskToEdit?.description || "",
    status: taskToEdit?.status || "pendiente",
    dueDate: taskToEdit?.dueDate || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let newTask;
      if (taskToEdit) {
        newTask = await taskService.updateTask(taskToEdit.id, taskData);
        toast.success("Task updated successfully");
      } else {
        newTask = await taskService.createTask(taskData);
        toast.success("Task Created");
      }
      onTaskCreated(newTask);
      onClose(); // Cierra el modal después de crear/editar la tarea
    } catch (error) {
      toast.error("Error creating task");
    }
  };

  return (
    <Modal show={show} onClose={onClose} size="lg">
      <Modal.Header>
        {taskToEdit ? "Actualizar Tarea" : "Crear Tarea"}
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInput
            placeholder="Título"
            value={taskData.title}
            onChange={(e) =>
              setTaskData({ ...taskData, title: e.target.value })
            }
            required
            className="w-full"
          />

          <TextInput
            placeholder="Descripción"
            value={taskData.description}
            onChange={(e) =>
              setTaskData({ ...taskData, description: e.target.value })
            }
            className="w-full"
          />

          <Select
            value={taskData.status}
            onChange={(e) =>
              setTaskData({ ...taskData, status: e.target.value })
            }
            className="w-full"
          >
            <option value="pendiente">Pendiente</option>
            <option value="completada">Completada</option>
          </Select>

          <TextInput
            type="date"
            value={taskData.dueDate}
            onChange={(e) =>
              setTaskData({ ...taskData, dueDate: e.target.value })
            }
            className="w-full"
          />

          <div className="flex justify-end">
            <Button type="submit">
              {taskToEdit ? `Actualizar Tarea` : `Crear Tarea`}
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default TaskForm;
