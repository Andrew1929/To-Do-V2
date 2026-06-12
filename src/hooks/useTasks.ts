import { useEffect, useState } from "react";
import { getTasks } from "../api/tasks.api";
import type { Task } from "../types/task.types";

export function useTasks() {
    const [tasks, setTasks] = useState<Task []>([])
    const [error, setError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        async function loadTasks() {
          try {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const data = await  getTasks("https://jsonplaceholder.typicode.com/todos") ;
            setLoading(false);
            setTasks(data);   
          } catch (error) {
            if (error) {
              setError(true);
            }

            console.error(error)
          } 
        }

        loadTasks();
    }, []);

    return {tasks , error , loading};
}