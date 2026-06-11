import { useEffect, useState } from "react";
import { getTasks } from "../api/tasks.api";
import type { Task } from "../types/task.types";

export function useTasks() {
    const [tasks, setTasks] = useState<Task []>([])

    useEffect(() => {
        async function loadTasks() {
          try {
            const data = await getTasks("https://jsonplaceholder.typicode.com/todos")
            setTasks(data)   
          } catch (error) {
            console.error(error)
          }
        }

        loadTasks();
    }, []);

    return {tasks};
}