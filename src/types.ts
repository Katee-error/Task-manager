export interface Task {
  id: number;
  icon: string;
  type: "todo" | "in_progress" | "review" | "done";
  startDay: number;
  endDay: number;
  description: string;
  onEdit: () => void;
  onDelete: () => void;
}
