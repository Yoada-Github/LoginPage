import React, { useState } from 'react';
import LoginForm from './Component/LoginForm';
import UserDashboard from './Component/UserDashboard';
import AdminDashboard from './Component/AdminDashboard';
import ErrorMessage from './Component/ErrorMessage';
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setIsAdmin(true);
      setShowError(false);
    } else if (username === 'user' && password === 'user') {
      setIsLoggedIn(true);
      setIsAdmin(false);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setShowError(false);
  };

  return (
    <div className="App">
      {!isLoggedIn && <LoginForm onLogin={handleLogin} />}
      {isLoggedIn && isAdmin && <AdminDashboard onLogout={handleLogout} />}
      {isLoggedIn && !isAdmin && <UserDashboard onLogout={handleLogout} />}
      {showError && <ErrorMessage />}
    </div>
  );
}

export default App;
