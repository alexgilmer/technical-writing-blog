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

const newBlogListing = [
  {
    title: "Grad Journey Part 2",
    subtitle: "First Year at MITT",
    date: "2024-October-02",
    link: "/blog/gradjourney2",
    element: <GradJourney2 />,
  },
  {
    title: "Grad Journey Part 1",
    subtitle: "Internship and my First Dev Job with Bit Space Development",
    date: "2024-September-10",
    link: "/blog/gradjourney1",
    element: <GradJourney1 />,
  },
];

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
          {newBlogListing.map((blog, index) => (
            <Card className={classes.blogCardStyles} key={index}>
              <CardActionArea>
                <Link className={classes.linkStyles} to={blog.link}>
                  <CardContent>
                    <Typography variant="h5">{blog.title}</Typography>
                    <Typography variant="body1">{blog.subtitle}</Typography>
                    <Typography>
                      <small>{blog.date}</small>
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          ))}

          {oldBlogListing.map((oldBlog, index) => (
            <Card className={classes.blogCardStyles} key={index}>
              <CardActionArea>
                <a className={classes.linkStyles} href={oldBlog.href}>
                  <CardContent>
                    <Typography variant="h5">{oldBlog.title}</Typography>
                    <Typography variant="body1">
                      {oldBlog.description}
                    </Typography>
                  </CardContent>
                </a>
              </CardActionArea>
            </Card>
          ))}
        </Route>

        {newBlogListing.map((blog, index) => (
          <Route path={blog.link}>
            <Link to="/blog">
              <Typography>Back to Blog listing</Typography>
            </Link>

            {blog.element}

            <Link to="/blog">
              <Typography>Back to Blog listing</Typography>
            </Link>
          </Route>
        ))}
      </Switch>
    </Container>
  );
};

export default PageBlog;
