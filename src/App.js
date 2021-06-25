import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import PageAbout from "./components/PageAbout";
import PageHome from "./components/PageHome";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header active="" />
          <PageHome />
        </Route>

        <Route path="/aboutme">
          <Header active="aboutme" />
          <PageAbout />
        </Route>

        <Route path="/blog">
          <Header active="blog" />
        </Route>

        <Route path="/contact">
          <Header active="contact" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
