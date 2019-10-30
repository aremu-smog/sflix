import React from 'react';
import './Style.css'
import {WatchlistProvider} from './Contexts/WatchlistContext'
import {UserProvider} from './Contexts/UserContext'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import Dashboard from './Dashboard'
import Signin from './Home/Signin';
import Home from './Home';
function App() {
  return (
    <div>

            <Router>
           <WatchlistProvider>
             <UserProvider>
             <Route path="/signin" component={Signin} />
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
