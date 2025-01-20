import { atom } from "jotai";
import { Task } from "./models";

export const tasksAtom = atom<Task[]>([]);
