import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import PageAbout from "./components/PageAbout";
import PageHome from "./components/PageHome";
import PageBlog from "./components/PageBlog";
import PageContact from "./components/PageContact";
import { Container, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";

function App() {
  const [lastUpdated, setLastUpdated] = useState(new Date(0));
  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/alexgilmer/technical-writing-blog/commits"
    )
      .then((response) => response.json())
      .then((data) => {
        const { commit } = data[0];

        const date = commit.author.date;
        setLastUpdated(new Date(date));

        const message = commit.message;
        setLastMessage(message);
      })
      .catch((err) => console.log(err));
  }, []);

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
            <small>
              Page last updated: {lastUpdated.toLocaleDateString()}, "
              {lastMessage}"
            </small>
          </Typography>
        </footer>
      </Container>
    </>
  );
}

export default App;
