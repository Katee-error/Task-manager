import { Task } from "data/tasks/models";
import rawTasks from "./tasks.json";

export const loadTasks = () => Task.array().parse(rawTasks);
