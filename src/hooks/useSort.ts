import { useState } from "react";
import type { Task } from "../types/task.types";

export function useSort(filteredTasks: Task[]) {
    const [sortBy, setSortBy] = useState<string>("User ID ↑");
    const [viewBy, setViewBy] = useState<string>("All");

    const sortedTasks = [...filteredTasks].sort((a, b) => {
    switch (sortBy) {
      case "User ID ↑":
        return a.userId - b.userId;
      case "User ID ↓":
        return b.userId - a.userId;
      case "Title ↓":
        return b.title.localeCompare(a.title);
      case "Title ↑":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const viewFilteredTasks = sortedTasks.filter((task) => {
    switch (viewBy) {
      case "All":
        return true;
      case "Completed":
        return task.completed === true;
      case "Uncompleted":
        return task.completed === false;
      default:
        return true;
    }
  });

  return {sortedTasks, sortBy, setSortBy, viewFilteredTasks, viewBy, setViewBy};
}