import React, { useState, ChangeEvent } from "react";

type TaskForm = {
  onAdd: (newTask: { id: string; text: string }) => void;
}

const AddTaskForm: React.FC<TaskForm> = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    onAdd({ id: Math.random().toString(), text: task });
    setTask('');
  };

  return (
    <div>
      <input type="text" value={task} onChange={inputChange} placeholder="Add new task" />
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export default AddTaskForm;
