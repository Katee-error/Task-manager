import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { deserializeTasks, serializeTasks, Task } from "./models";
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
