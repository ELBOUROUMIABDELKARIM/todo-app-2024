import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Home from './pages/Home';
import About from './pages/About';
import TodoDetails from './components/Todo/TodoDetails';
import { todoItems as initialTodoItems } from './Utils';
import FloatingButton from './components/UI/FloatingButton';
import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  login: () => {
    localStorage.setItem('isLoggedIn', 'true');
    set({ isLoggedIn: true });
  },
  logout: () => {
    localStorage.removeItem('isLoggedIn');
    set({ isLoggedIn: false });
  }
}));

function App() {
  const { isLoggedIn } = useAuthStore();
  const [todos, setTodos] = useState(initialTodoItems);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate to={isLoggedIn ? '/home' : '/login'} />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/home" /> : <Authentication />}
        />
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <>
                <FloatingButton />
                <Home todos={todos} setTodosHome={setTodos} />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/todo/:id"
          element={
            isLoggedIn ? (
              <>
                <FloatingButton />
                <TodoDetails />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/about"
          element={
            isLoggedIn ? (
              <>
                <FloatingButton />
                <About />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
