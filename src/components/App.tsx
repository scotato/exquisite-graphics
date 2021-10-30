import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import ScrollToTop from "../components/ScrollToTop";
import HomePage from "../pages/HomePage";
import HelpPage from "../pages/HelpPage";

function App() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/help">
            <HelpPage />
          </Route>
        </Switch>
      </AppLayout>
      <ScrollToTop />
    </Router>
  );
}

export default App;
