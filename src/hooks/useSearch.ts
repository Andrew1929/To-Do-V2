import type { Task } from "../types/task.types";

export function useSearch(tasks: Task[], searchQuery: string) {
    
    const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filteredTasks;
}