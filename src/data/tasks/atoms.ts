import { atom } from "jotai";
import { Task } from "./models";

export const tasksAtom = atom<Task[]>([]);

export const deleteTaskAtom = atom(null, (_, set, id: number) => {
  set(tasksAtom, (tasks) => tasks.filter((task) => task.id !== id));
});
