import { compareAsc } from "date-fns";
import { useAtom, useSetAtom } from "jotai";
import { deleteTaskAtom, tasksAtom } from "./atoms";
import { useEffect, useMemo } from "react";
import { groupBy } from "utils/collections";
import { loadTasks } from "./loadTasks";

export const useTasksByStatus = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);

  const tasksByStatus = useMemo(
    () =>
      groupBy(
        tasks.sort((task1, task2) =>
          compareAsc(task1.startDay, task2.startDay)
        ),
        ({ type }) => type,
        {
          todo: [],
          in_progress: [],
          review: [],
          done: [],
        }
      ),
    [tasks]
  );

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  return tasksByStatus;
};

export const useTaskActions = () => {
  const deleteTask = useSetAtom(deleteTaskAtom);

  return { deleteTask };
};
