import { formatDate } from "utils/date";
import z from "zod";

export const TaskType = z.enum(["todo", "in_progress", "review", "done"]);
export type TaskType = z.infer<typeof TaskType>;

export const Task = z.object({
  id: z.coerce.number(),
  type: TaskType,
  startDay: z.coerce.date(),
  endDay: z.coerce.date(),
  text: z.string(),
});
export type Task = z.infer<typeof Task>;

export const isExpired = (task: Task): boolean => task.endDay <= new Date();

export const serializeTasks = (tasks: Task[]): string =>
  JSON.stringify(
    tasks.map(({ startDay, endDay, ...task }) => ({
      ...task,
      endDay: endDay.valueOf(),
      startDay: startDay.valueOf(),
    }))
  );

export const deserializeTasks = (tasks: unknown) => Task.array().parse(tasks);

export const searchTasks = (search: string, tasks: Task[]) => {
  if (!search) return tasks;

  return tasks.filter(({ text, startDay, endDay }) => {
    const textMatch = new RegExp(`.*${search.toLowerCase()}.*`).test(
      text.toLowerCase()
    );

    const startDayMatch = formatDate(startDay) === search;
    const endDayMatch = formatDate(endDay) === search;

    return textMatch || startDayMatch || endDayMatch;
  });
};
