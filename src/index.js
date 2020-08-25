import React from 'react';
import ReactDOM from 'react-dom';

import './Resources/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './Component/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UploadFile from './Component/UploadFile/UploadFile';

//  react route ver 5
ReactDOM.render(
   <Router>
     <div>
       <Switch>
          {/* importent is order path */}
          <Route path="/h/:slug">
            <Home />
          </Route>
         <Route path="/upload" component={UploadFile} />
         <Route path="/" component={App} />
       </Switch>
     </div>
   </Router>,
   document.getElementById('root')
 )

serviceWorker.unregister();
