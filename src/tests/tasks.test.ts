import { Task, isExpired } from "../data/tasks/models";
import { addDays, subDays } from "date-fns";

const now = new Date("2025-01-01T12:00:00Z");

const futureTask: Task = {
  id: 1,
  type: "todo",
  startDay: subDays(now, 3),
  endDay: addDays(now, 1),
  text: "Задача",
};
const expiredTask: Task = {
  ...futureTask,
  endDay: subDays(now, 1),
};
const expiringTask: Task = {
  ...futureTask,
  endDay: now,
};

describe("Task expiry check", () => {
  beforeAll(() => {
    jest.spyOn(global, "Date").mockImplementation(() => now as unknown as Date);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should return true if task end day is in the past", () => {
    expect(isExpired(expiredTask)).toBe(true);
  });

  it("should return true if task end day is now", () => {
    expect(isExpired(expiringTask)).toBe(true);
  });

  it("should return false if task end day is in the future", () => {
    expect(isExpired(futureTask)).toBe(false);
  });
});
