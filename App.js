import React, { useState } from 'react';
import LoginScreen from './screens/login';
import HomeScreen from './screens/home';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    isLoggedIn
      ? <HomeScreen onLogout={() => setIsLoggedIn(false)} />
      : <LoginScreen onLoginSuccess={() => setIsLoggedIn(true)} />
  );
}
