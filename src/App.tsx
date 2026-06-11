import {  useState } from 'react';

import { useTasks } from './hooks/useTasks';
import { useSearch } from './hooks/useSearch';
import { useSort } from './hooks/useSort';
import { usePagination } from './hooks/usePagination';

import { Header } from './components/header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ToolBar } from './components/ToolBar/ToolBar';
import { TaskList } from './components/TaskList/TaskList';
import { Pagination } from './components/Pagination/Pagination';

function App() {
  const {tasks} = useTasks();

  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredTasks = useSearch(tasks, searchQuery);

  const {
    sortBy, 
    setSortBy, 
    viewFilteredTasks, 
    viewBy, 
    setViewBy
  } = useSort(filteredTasks);
  
  const {
    totalPages, 
    handlePageChange, 
    getCurrentPageTasks , 
    currentPage, 
    setRowPerPage ,
    rowPerPage
  } = usePagination(viewFilteredTasks);

  return (
    <div className='app-container'>
      <Header 
        tasks={viewFilteredTasks} 
      />

      <SearchBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />

      <ToolBar 
        sortBy={sortBy} 
        setSortBy={setSortBy} 
        viewBy={viewBy} 
        setViewBy={setViewBy}
      />

      <TaskList 
        tasks={getCurrentPageTasks(currentPage, rowPerPage)} 
      />

      <Pagination  
        setRowPerPage={setRowPerPage} 
        currentPage={currentPage}
        handlePageChange={handlePageChange} 
        totalPages={totalPages} 
      />
    </div>
  )
}

export default App
