import {
  Container,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

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

const blogListing = [
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
      {blogListing.map((blog) => (
        <Card className={classes.blogCardStyles}>
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
    </Container>
  );
};

export default PageBlog;
