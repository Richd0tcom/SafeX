import React from 'react';

import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './init-firebase.config';








function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <main className="">

        { user ? <Dashboard /> : <SignIn /> }
        
      </main>
      
    </div>
  );
}

export default App;
