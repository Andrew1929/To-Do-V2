import { useEffect, useState } from 'react';
import type { Task } from './types/task.types';
import { getTasks } from './api/tasks.api';

import { Header } from './components/header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ToolBar } from './components/ToolBar/ToolBar';
import { TaskList } from './components/TaskList/TaskList';
import { Pagination } from './components/Pagination/Pagination';



function App() {
  const [tasks, setTasks] = useState<Task []>([])
  const [searchQuery, setSearchQuery] = useState<string>("");

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

  const filteredTasks = tasks.filter((task) => {
    return task.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className='app-container'>
      <Header tasks={filteredTasks} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ToolBar/>
      <TaskList tasks={filteredTasks} />
      <Pagination/>
    </div>
  )
}

export default App
