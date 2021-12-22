import React from 'react';
import Home from './home.js';
import Info from './info.js';
import{ BrowserRouter as Router,Switch,Route}  from  'react-router-dom';

const App=()=>{
  return(
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/info" component={Info}/>
      </Switch>
    </div>
    </Router>
  )
}
export default App;