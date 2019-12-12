import React from 'react';
import './Style.css'
import {WatchlistProvider} from './Contexts/WatchlistContext'
import {UserProvider} from './Contexts/UserContext'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Dashboard from './Dashboard'
import Signin from './Forms/Signin'
import Signup from './Forms/Signup'
import Home from './Home';
function App() {
  return (
    <div>
            <Router>
           <WatchlistProvider>
             <UserProvider>
             <Route path="/signin" component={Signin} />
             <Route path="/signup" component={Signup} />
             <Route exact path="/" component={Home} />
             <Route path="/dashboard" component={Dashboard} />
             </UserProvider>
          </WatchlistProvider>
      </Router>
      {/* <WatchlistProvider>
        <Header />
        <Movies />
        <Navbar />
        <Home />
      </WatchlistProvider> */}
      
    </div>
  );
}

export default App;
