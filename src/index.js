import React from 'react';
import ReactDOM from 'react-dom';

import './Resources/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './Component/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//  react route ver 5
ReactDOM.render(
   <Router>
     <div>
       <Switch>
          {/* importent is order path */}
         <Route path="/h" component={Home} />
         <Route path="/" component={App} />
       </Switch>
     </div>
   </Router>,
   document.getElementById('root')
 )

serviceWorker.unregister();
