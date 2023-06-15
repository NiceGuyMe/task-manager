import { useTaskManager } from "@/store/useTaskManager";
import React, { ChangeEvent, useRef } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskManager = () => {
  const addTask = useTaskManager((state: any) => state.addTask);
  const deleteTask = useTaskManager((state: any) => state.deleteTask);
  const updateTask = useTaskManager((state: any) => state.updateTask);
  const searchTask = useTaskManager((state: any) => state.searchTask);
  const setSearchTask = useTaskManager((state: any) => state.setSearchTask);

  const handleAddTask = () => {
    const title = ""; // Replace with the value in the createTaskRef
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    addTask(newTask);
  };

  const handleUpdateTask = (taskId: number, updatedTask: Task) => {
    updateTask(taskId, updatedTask);
  };

  const handleDeleteTask = (taskId: number) => {
    deleteTask(taskId);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTask(e.target.value);
  };

  // See! I already give you everything!
  // const filteredTasks = tasks.filter((task) =>
  //   task.title.toLowerCase().includes(searchTask.toLowerCase())
  // );

  return (
    <div>
      <h1>Task Manager</h1>

      <input type="text" /*ref={}*/ />

      <button onClick={handleAddTask}>Add Task</button>

      <input type="text" onChange={handleSearch} placeholder="Search Task" />

      <ul>
        {/* 
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <input
              type="text"
              value={task.title}
              onChange={(e) =>
                handleUpdateTask(task.id, { title: e.target.value })
              }
            />
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
        */}
      </ul>
    </div>
  );
};

export default TaskManager;
