export interface Task {
  id: number;
  type: "todo" | "in_progress" | "review" | "done";
  startDay: number;
  endDay: number;
  description: string;
  onEdit: () => void;
  onDelete: () => void;
}
