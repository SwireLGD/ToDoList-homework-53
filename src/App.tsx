import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Task from "./components/Task";

type Task = {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '11', text: 'Buy milk' },
    { id: '22', text: 'Do homework' }
  ]);

  const addTask = (newTask: Task) => {
    setTasks((oldTasks) => [...oldTasks, newTask]);
  };

  const deleteTask = (taskId: string) => {
    setTasks((oldTasks) => {
      const updatedTasks = [...oldTasks];
      const removeIndex = updatedTasks.findIndex((task) => task.id === taskId);

      if (removeIndex !== -1) {
        updatedTasks.splice(removeIndex, 1);
      }

      return updatedTasks;
    });
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTaskForm onAdd={addTask} />
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDeleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default App;