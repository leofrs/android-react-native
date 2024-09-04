type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export type TaskList = Task[];

export const tasksDb: TaskList = [
  {
    id: 1,
    title: "Task 1",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    completed: false,
  },
];
