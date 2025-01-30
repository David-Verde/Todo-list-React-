import React, { useState } from "react";
import TaskList from "../tasks/TaskList";
import TaskForm from "../tasks/TaskForm";
import { Button } from "flowbite-react";

const Dashboard = () => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleTaskCreated = (newTask) => {
    setShowTaskForm(false);
    if (taskToEdit) {
    
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === newTask.id ? newTask : task))
      );
      setTaskToEdit(null); 
    } else {
     
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setShowTaskForm(true); 
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Mis Tareas</h1>

    
      <div className="mb-4">
        <Button onClick={() => setShowTaskForm(true)}>
          {showTaskForm ? "Cancelar" : "Crear Tarea"}
        </Button>
      </div>

 
      {showTaskForm && (
        <TaskForm
          show={showTaskForm}
          onClose={() => {
            setShowTaskForm(false);
            setTaskToEdit(null); 
          }}
          onTaskCreated={handleTaskCreated}
          taskToEdit={taskToEdit}
        />
      )}

     
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        onEditTask={handleEditTask} 
      />
    </div>
  );
};

export default Dashboard;
