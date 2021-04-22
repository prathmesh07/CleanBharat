import React from 'react';
import Home from "./pages/Home"
import Report from "./pages/Report"
import News from "./pages/News"
import Team from "./pages/Team"
import Info from "./pages/Info"
import Newsf from "./pages/Newsf"
import {BrowserRouter,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css';


function App() {
  return (
 
    <BrowserRouter>
     
        <Route path="/" exact>
    <Home />
   </Route>
        <Route path="/report" component={Report} />
        <Route path="/team">
        <Team />
    </Route>
        <Route path="/news" component={News} />
        <Route path="/newsf" component={Newsf} />
        <Route path="/info" component={Info} />
  
    </Router>
  
  );
}

export default App;
