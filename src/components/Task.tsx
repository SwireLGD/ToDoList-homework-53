import React from "react";

type TaskProp = {
    task: { id: string; text: string };
    onDeleteTask: (taskId: string) => {};
}

const Task: React.FC<TaskProp> = ({ task, onDeleteTask }) => {
    const deleteTask = () => {
        onDeleteTask(task.id);
    };

    return (
        <div className="taskDiv">
            <p className="taskText">{task.text}</p>
            <button className="deleteBtn" onClick={deleteTask}></button>
        </div>
    );
}

export default Task;