import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import PageAbout from "./components/PageAbout";
import PageHome from "./components/PageHome";
import PageBlog from "./components/PageBlog";
import PageContact from "./components/PageContact";
import { Container, Typography } from "@material-ui/core";

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
          <PageContact />
        </Route>
      </Switch>

      <Container maxWidth="sm" style={{ marginTop: "2em" }}>
        <footer>
          <Typography>&copy; Alex Gilmer</Typography>

          <Typography>
            <small>Page last updated: 2024-October-02</small>
          </Typography>
        </footer>
      </Container>
    </>
  );
}

export default App;
