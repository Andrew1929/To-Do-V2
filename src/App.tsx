import {  useState } from 'react';

import { useTasks } from './hooks/useTasks';
import { useSearch } from './hooks/useSearch';
import { useTaskFilters } from './hooks/useTaskFilters';
import { usePagination } from './hooks/usePagination';

import { Header } from './components/header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ToolBar } from './components/ToolBar/ToolBar';
import { TaskList } from './components/TaskList/TaskList';
import { Pagination } from './components/Pagination/Pagination';
import { ErrorView } from './components/ErrorView/ErrorView';
import { LoadingView } from './components/LoaadingView/LoadingView';

function App() {

  const {tasks , error, loading} = useTasks();

  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredTasks = useSearch(tasks, searchQuery);

  const {
    sortBy, 
    setSortBy, 
    viewFilteredTasks, 
    viewBy, 
    setViewBy
  } = useTaskFilters(filteredTasks);
  
  const {
    totalPages, 
    handlePageChange, 
    getCurrentPageTasks , 
    currentPage, 
    setRowPerPage ,
    rowPerPage
  } = usePagination(viewFilteredTasks);

  if(error === true) {
    return (
      <div className='app-container--error'>
        <Header 
          tasks={viewFilteredTasks} 
        />

        <ErrorView/>
      </div>
    )
  } else if (loading === true) {
    return (
      <div className='app-container--loading'>
        <Header 
          tasks={viewFilteredTasks} 
        />

        <LoadingView/>
      </div>
    )
  } else {
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
}

export default App
