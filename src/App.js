import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import PageAbout from "./components/PageAbout";
import PageHome from "./components/PageHome";
import PageBlog from "./components/PageBlog";

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
          <PageBlog />
        </Route>

        <Route path="/contact">
          <Header active="contact" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
