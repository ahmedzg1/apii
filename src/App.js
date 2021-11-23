import './App.css';
import { Link,Switch,  } from "react-router-dom";
import {
  Router,
Route,
} from "react-router";

import PostsWithAxios from './PostsWithAxios'

function App() {
  return (
    <Router>
     <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home (Default with Fetch Api Example)</Link>
          </li>
  
          <li>
            <Link to="/axios">Click Here - Posts With Axios Example</Link>
          </li>
        </ul>
      </nav>
      <Switch>
      
        <Route path="/axios">
          <PostsWithAxios />
        </Route>
        
      </Switch>
    </div>
  </Router>
  );
}
export default App;