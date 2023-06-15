import create from "zustand";

const useTaskManager = create((set) => ({
  tasks: [],
  searchTask: "",
  setSearchTask: (searchTask: any) => set({ searchTask }),
  addTask: (task: any) =>
    set((state: { tasks: any }) => ({ tasks: [...state.tasks, task] })),
  updateTask: (taskId: any, newTitle: any) =>
    set((state: { tasks: any[] }) => ({
      tasks: state.tasks.map((task: { id: any }) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      ),
    })),
  deleteTask: (taskId: any) =>
    set((state: { tasks: any[] }) => ({
      tasks: state.tasks.filter((task: { id: any }) => task.id !== taskId),
    })),
}));

export { useTaskManager };
