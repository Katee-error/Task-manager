import { Task } from "data/tasks/models";
import rawTasks from "./tasks.json";

const tasks = Task.array().parse(rawTasks);

export const todoTasks = tasks.filter(({ type }) => type === "todo");
export const inProgressTasks = tasks.filter(
  ({ type }) => type === "in_progress"
);
export const reviewTasks = tasks.filter(({ type }) => type === "review");
export const doneTasks = tasks.filter(({ type }) => type === "done");
