import { cleanup, render, screen } from '@testing-library/react';
import App from './App';

describe('Testing App Component', () => {
  let store = {};
  const mockLocalStorage = () => {
    const localStorageMock = {
      getItem: jest.fn((key) => store[key] || null),
      setItem: jest.fn((key, value) => {
        store[key] = value.toString();
      }),
      removeItem: jest.fn((key) => {
        delete store[key];
      }),
      clear: jest.fn(() => {
        store = {};
      }),
    };
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  };

  beforeAll(() => {
    mockLocalStorage();
  });

  beforeEach(() => {
    localStorage.setItem('isLoggedIn', 'false');
  });

  afterEach(() => {
    localStorage.clear();
    cleanup()
  });

  it('renders App without crashing', () => {
    render(<App />);
  });

  it('should render Login Form', () => {
    render(<App />);
    const loginh1 = screen.getByText('Login Form');
    expect(loginh1).toBeInTheDocument();
  });

  it('should render FloatingButton and TodoList after Login', async () => {
    localStorage.setItem('isLoggedIn', 'true');
    render(<App />);
    const floatingButton = await screen.findByText('Logout');
    const todoList = await screen.findByPlaceholderText('Search todos');
    expect(floatingButton).toBeInTheDocument();
    expect(todoList).toBeInTheDocument();
  });

});
