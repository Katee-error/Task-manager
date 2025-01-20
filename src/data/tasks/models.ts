import z from "zod";

export const TaskType = z.enum(["todo", "in_progress", "review", "done"]);
export type TaskType = z.infer<typeof TaskType>;

export const Task = z.object({
  id: z.number(),
  type: TaskType,
  startDay: z.number().transform((epoch) => new Date(epoch)),
  endDay: z.number().transform((epoch) => new Date(epoch)),
  text: z.string(),
});
export type Task = z.infer<typeof Task>;

export const isExpired = (task: Task): boolean => task.endDay <= new Date();
