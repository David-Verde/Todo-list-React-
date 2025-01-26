import React, { useState } from 'react';
import { Button, TextInput, Label, Select } from 'flowbite-react';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    onUpdate(updatedTask);
    setIsEditing(false);
  };

  const handleStatusChange = (e) => {
    setUpdatedTask({ ...updatedTask, status: e.target.value });
  };

const getStatusClass = (status) => {
    if (status === 'pendiente') {
        return 'bg-yellow-100';
    } else if (status === 'completada') {
        return 'bg-green-100';
        }
        return 'bg-white';
        }


  return (
    <div className={`rounded-lg border p-4 shadow-md ${getStatusClass(task.status)}`}>
      {isEditing ? (
        <div>
          <Label htmlFor="title">Título</Label>
          <TextInput
            id="title"
            value={updatedTask.title}
            onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
          />

          <Label htmlFor="description">Descripción</Label>
          <TextInput
            id="description"
            value={updatedTask.description}
            onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
          />

          <Label htmlFor="dueDate">Fecha</Label>
          <TextInput
            id="dueDate"
            type="date"
            value={updatedTask.dueDate}
            onChange={(e) => setUpdatedTask({ ...updatedTask, dueDate: e.target.value })}
          />

          <Label htmlFor="status">Estado</Label>
          <Select
            id="status"
            value={updatedTask.status}
            onChange={handleStatusChange}
          >
            <option value="pendiente">Pendiente</option>
            <option value="completada">Completada</option>
          </Select>

          <div className="mt-2 flex space-x-2">
            <Button color="success" onClick={handleSave}>
              Guardar
            </Button>
            <Button color="gray" onClick={handleEditToggle}>
              Cancelar
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-bold">{task.title}</h3>
          <p>Descripción: {task.description}</p>
          <p>Fecha: {new Date(task.dueDate).toLocaleDateString()}</p>
          <p>Status: {task.status}</p>
          <div className="mt-2 flex space-x-2">
            <Button color="info" onClick={handleEditToggle}>
              Editar
            </Button>
            <Button color="failure" onClick={() => onDelete(task.id)}>
              Eliminar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
