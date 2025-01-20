import { deserializeTasks } from "data/tasks/models";
import rawTasks from "./tasks.json";

export const loadTasks = () => deserializeTasks(rawTasks);
