import {
  Container,
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Switch, Route, Link } from "react-router-dom";

import GradJourney1 from "./blogs/grad-journey-pt1/GradJourney1";
import GradJourney2 from "./blogs/grad-journey-pt2/GradJourney2";

const useStyles = makeStyles((theme) => ({
  blogCardStyles: {
    border: "1px solid black",
    margin: "1rem",
  },
  linkStyles: {
    color: "black",
    textDecoration: "none",
  },
}));

const oldBlogListing = [
  {
    title: "Coding Deep Dive",
    href: "/blogPages/coding/CodingDeepDive.html",
    description:
      "An in-depth description of one project during my React course in which I got to flex new knowledge",
  },
  {
    title: "Password Discipline",
    href: "/blogPages/passwords/PasswordDiscipline.html",
    description: "An article discussing the value in choosing secure passwords",
  },
  {
    title: "An Introduction to HTML and CSS",
    href: "/blogPages/basics/HTMLCSSbasics.html",
    description:
      "A piece of technical writing that's intended to show basic HTML to a brand-new developer",
  },
];

const PageBlog = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Switch>
        <Route exact path="/blog">
          <Card className={classes.blogCardStyles}>
            <CardActionArea>
              <Link className={classes.linkStyles} to="/blog/gradjourney2">
                <CardContent>
                  <Typography variant="h5">Grad Journey Part 2</Typography>
                  <Typography variant="body1">First Year at MITT</Typography>
                  <Typography>
                    <small>2024-October-02</small>
                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>

          <Card className={classes.blogCardStyles}>
            <CardActionArea>
              <Link className={classes.linkStyles} to="/blog/gradjourney1">
                <CardContent>
                  <Typography variant="h5">Grad Journey Part 1</Typography>
                  <Typography variant="body1">
                    Internship and my First Dev Job with Bit Space Development
                  </Typography>
                  <Typography>
                    <small>2024-September-10</small>
                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>

          {oldBlogListing.map((blog, index) => (
            <Card className={classes.blogCardStyles} key={index}>
              <CardActionArea>
                <a className={classes.linkStyles} href={blog.href}>
                  <CardContent>
                    <Typography variant="h5">{blog.title}</Typography>
                    <Typography variant="body1">{blog.description}</Typography>
                  </CardContent>
                </a>
              </CardActionArea>
            </Card>
          ))}
        </Route>

        <Route path="/blog/gradjourney1">
          <Link to="/blog">
            <Typography>Back to Blog listing</Typography>
          </Link>

          <GradJourney1 />

          <Link to="/blog">
            <Typography>Back to Blog listing</Typography>
          </Link>
        </Route>

        <Route path="/blog/gradjourney2">
          <Link to="/blog">
            <Typography>Back to Blog listing</Typography>
          </Link>

          <GradJourney2 />

          <Link to="/blog">
            <Typography>Back to Blog listing</Typography>
          </Link>
        </Route>
      </Switch>
    </Container>
  );
};

export default PageBlog;
