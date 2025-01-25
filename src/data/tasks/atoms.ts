import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { deserializeTasks, serializeTasks, Task, TaskType } from "./models";
import { loadTasks } from "./loadTasks";

const storage = {
  getItem: (key: string, initialValue: Task[]) => {
    try {
      return deserializeTasks(JSON.parse(localStorage.getItem(key) ?? ""));
    } catch (err) {
      return initialValue;
    }
  },
  setItem: (key: string, tasks: Task[]) => {
    localStorage.setItem(key, serializeTasks(tasks));
  },
  removeItem: (key: string) => localStorage.removeItem(key),
};

export const tasksAtom = atomWithStorage<Task[]>(
  "tasks",
  loadTasks(),
  storage,
  {
    getOnInit: true,
  }
);

export const searchAtom = atom("");

export const deleteTaskAtom = atom(null, (_, set, id: number) => {
  set(tasksAtom, (tasks) => tasks.filter((task) => task.id !== id));
});

export const editTaskAtom = atom(null, (_, set, updated: Task) => {
  set(tasksAtom, (tasks) =>
    tasks.map((task) => (task.id === updated.id ? updated : task))
  );
});

export const updateTaskTypeAtom = atom(
  null,
  (_, set, taskId: number, newType: TaskType) => {
    set(tasksAtom, (tasks) =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, type: newType } : task
      )
    );
  }
);

export const activeDragTaskAtom = atom<Task | null>(null);

export const setActiveDragTaskAtom = atom(
  null,
  (get, set, taskId: number | null) => {
    set(
      activeDragTaskAtom,
      get(tasksAtom).find((task) => task.id === taskId) ?? null
    );
  }
);


export const taskCountsAtom = atom((get) => {
  const tasks = get(tasksAtom);

  const initialCounts: Record<TaskType, number> = {
    todo: 0,
    in_progress: 0,
    review: 0,
    done: 0,
  };

  return tasks.reduce<Record<TaskType, number>>((counts, task) => {
    counts[task.type] = (counts[task.type] || 0) + 1;
    return counts;
  }, initialCounts); 
});