import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";



export const Template4 = () => {
  return (
    <div>
      <Router>
        <Switch>
            <Route path="/template4">
                <HomePage/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
};
