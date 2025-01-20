export type TaskType = "todo" | "in_progress" | "review" | "done";

export interface Task {
  id: number;
  type: TaskType;
  startDay: number;
  endDay: number;
  text: string;
}
