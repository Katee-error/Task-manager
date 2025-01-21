import { compareAsc } from "date-fns";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  activeDragTaskAtom,
  deleteTaskAtom,
  editTaskAtom,
  searchAtom,
  setActiveDragTaskAtom,
  tasksAtom,
  updateTaskTypeAtom,
} from "./atoms";
import { useCallback, useMemo, useState } from "react";
import { groupBy } from "utils/collections";
import { searchTasks, Task, TaskType } from "./models";
import { formatDate, safeParseDate } from "utils/date";
import { DragEndEvent, DragOverEvent, DragStartEvent } from "@dnd-kit/core";

export const useTasksByStatus = () => {
  const tasks = useAtomValue(tasksAtom);
  const search = useAtomValue(searchAtom);

  const tasksByStatus = useMemo(
    () =>
      groupBy(
        searchTasks(search, tasks).sort((task1, task2) =>
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
    [tasks, search]
  );

  return tasksByStatus;
};

export const useTaskForm = (task: Task) => {
  const [startDay, setStartDay] = useState(formatDate(task.startDay));
  const [endDay, setEndDay] = useState(formatDate(task.endDay));
  const [text, setText] = useState(task.text);

  const resetAll = useCallback(() => {
    setStartDay(formatDate(task.startDay));
    setText(task.text);
    setEndDay(formatDate(task.endDay));
  }, [setStartDay, setEndDay, setText, task]);

  const submit = useCallback(() => {
    const updatedStartDay = safeParseDate(startDay, task.startDay);
    setStartDay(formatDate(updatedStartDay));
    const updatedEndDay = safeParseDate(endDay, task.endDay);
    setEndDay(formatDate(updatedEndDay));

    return {
      text,
      startDay: updatedStartDay,
      endDay: updatedEndDay,
    };
  }, [text, startDay, endDay, task.startDay, task.endDay]);

  return {
    startDay: {
      value: startDay,
      onEdit: setStartDay,
    },
    endDay: {
      value: endDay,
      onEdit: setEndDay,
    },
    text: {
      value: text,
      onEdit: setText,
    },
    resetAll,
    submit,
  };
};

export const useTaskActions = (task: Task) => {
  const deleteTask = useSetAtom(deleteTaskAtom);
  const editTask = useSetAtom(editTaskAtom);
  const [isEditing, setIsEditing] = useState(false);
  const { resetAll, ...form } = useTaskForm(task);

  const onDelete = useCallback(
    () => deleteTask(task.id),
    [deleteTask, task.id]
  );
  const onEditStart = useCallback(() => setIsEditing(true), [setIsEditing]);
  const onEditCancel = useCallback(() => {
    setIsEditing(false);
    resetAll();
  }, [setIsEditing, resetAll]);
  const onEditApply = useCallback(() => {
    setIsEditing(false);
    const updates = form.submit();
    editTask({
      ...task,
      ...updates,
    });
  }, [setIsEditing, editTask, form.submit]);

  return { onDelete, onEditStart, onEditCancel, onEditApply, isEditing, form };
};

export const useSearch = () => {
  const [search, setSearch] = useAtom(searchAtom);

  return { search, setSearch };
};

export const useUpdateTaskType = () => {
  return useSetAtom(updateTaskTypeAtom);
};

export const useDragControls = () => {
  const setActiveDragTask = useSetAtom(setActiveDragTaskAtom);

  const updateTaskType = useUpdateTaskType();

  const dragEndHandler = useCallback(
    (event: DragEndEvent) => {
      setActiveDragTask(null);

      if (!event.over) return;

      const taskId = event.active.id;
      const oldType = event.active.data.current?.sortable?.containerId;
      const newType =
        event.over.data.current?.sortable?.containerId ?? event.over.id;

      if (oldType === newType) return;

      updateTaskType(Number(taskId), newType);
    },

    [updateTaskType, setActiveDragTask]
  );

  const dragOverHandler = useCallback(
    (event: DragOverEvent) => {
      if (!event.over) return;

      const taskId = event.active.id;
      const oldType = event.active.data.current?.sortable?.containerId;
      const newType =
        event.over.data.current?.sortable?.containerId ?? event.over.id;

      if (oldType === newType) return;

      updateTaskType(Number(taskId), newType);
    },
    [updateTaskType]
  );

  const dragStartHandler = useCallback(
    (event: DragStartEvent) => {
      setActiveDragTask(Number(event.active.id));
    },
    [setActiveDragTask]
  );

  return {
    dragEndHandler,
    dragOverHandler,
    dragStartHandler,
  };
};

export const useActiveDragItem = () => {
  return useAtomValue(activeDragTaskAtom);
};
