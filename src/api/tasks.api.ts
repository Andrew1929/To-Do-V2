import type { Task } from "../types/task.types";

export async function  getTasks (URL: string) :Promise<Task []>  {    
    const res = await fetch (URL)

    if(!res.ok) {
        throw new Error ("Failed to fetch tasks")
    }

    return await res.json();
}