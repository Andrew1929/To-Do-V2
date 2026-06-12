# To Do App

A single-page React application for browsing, searching, filtering, sorting, and paginating tasks. Tasks are loaded from the public [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API.

## Features

- **Task list** — View tasks with title, completion status, and user indicator
- **Search** — Filter tasks by title (case-insensitive)
- **Sort** — Order by User ID or Title (ascending / descending)
- **Filter** — Show All, Completed, or Uncompleted tasks
- **Pagination** — Choose rows per page (5, 10, 20, 50, 100, or All) and navigate between pages
- **Loading state** — Animated loading screen while tasks are fetched
- **Error handling** — Error screen with a retry button if the API request fails

## Tech Stack

- React 19 + TypeScript
- Vite
- Font Awesome icons
- Lottie animation (loading screen)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm

### Installation

```bash
git clone <repository-url>
cd "ToDo app"
npm install
```

### Development

Start the dev server:

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Lint

Run ESLint:

```bash
npm run lint
```

## How to Use

1. **Open the app** — After starting the dev server, the task list loads automatically from the API.
2. **Search** — Type in the search bar to filter tasks by title.
3. **Sort** — Use the **Sort by** dropdown to order tasks by User ID or Title.
4. **Filter** — Use the **View** dropdown to show All, Completed, or Uncompleted tasks.
5. **Paginate** — Change **Rows per page** and use the page controls at the bottom to navigate.
6. **Toggle completion** — Click a task checkbox to mark it complete or incomplete (local UI only; changes are not saved to the API).
7. **Retry on error** — If loading fails, click **Try again** to reload the page.

## Project Structure

```
src/
├── api/           # API calls (fetch tasks)
├── components/    # UI components (Header, TaskList, SearchBar, etc.)
├── hooks/         # Custom hooks (useTasks, useSearch, useTaskFilters, usePagination)
├── types/         # TypeScript types
└── App.tsx        # Main app layout and state wiring
```

## Data Source

Tasks are fetched from:

```
https://jsonplaceholder.typicode.com/todos
```

Each task has: `id`, `userId`, `title`, and `completed`.

> **Note:** JSONPlaceholder is a fake REST API. Checkbox changes and the **Add Task** button are UI-only and do not persist data on a server.

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Type-check and build     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |
