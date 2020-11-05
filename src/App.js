import React from 'react';
import Home from "./pages/Home"
import Report from "./pages/Report"
import News from "./pages/News"
import Team from "./pages/Team"
import Info from "./pages/Info"
import Newsf from "./pages/Newsf"
import {
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css';


function App() {
  return (
 
    <Router>
        <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/report" component={Report} />
        <Route path="/team" component={Team} />
        <Route path="/news" component={News} />
        <Route path="/newsf" component={Newsf} />
        <Route path="/info" component={Info} />
        </Switch>
    </Router>
  
  );
}

export default App;
