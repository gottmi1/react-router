import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const isLogin = false;

function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Switch>
        <Route
          path="/login"
          render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
        />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
        {/* notfound는 path를 지정하지 않는다. */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
