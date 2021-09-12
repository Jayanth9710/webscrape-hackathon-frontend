

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Amazon from "./Amazon";
import Flipkart from "./Flipkart";
import Topbar from "./Topbar";
import front from "./FronPage";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar/>
            <Switch>
              <Route path="/" component={front} exact={true} />
              <Route path="/amzn" component={Amazon} exact={true} />
              <Route path="/flip" component={Flipkart} exact={true} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;