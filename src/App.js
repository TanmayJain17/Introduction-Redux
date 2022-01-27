import React from 'react'
import './App.css';
import Auth from './components/Auth'
import AccountStatus from './components/AccountStatus'
import Banking from './components/Banking'
import Balance from './components/Balance'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Auth />
      <Balance />
      <Banking />
      <AccountStatus />
    </div>
  );
}

export default App;
