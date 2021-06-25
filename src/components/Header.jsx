import { Container, Typography, Grid, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navStyles: {},
  ulStyles: { listStyle: "none" },
  linkStyles: { textDecoration: "none" },
  paperStyles: {
    color: "white",
    padding: "1rem",
    backgroundColor: theme.palette.primary[500],
    "&:hover": {
      backgroundColor: theme.palette.primary[700],
    },
  },
  activePaperStyles: {
    color: "white",
    padding: "1rem",
    backgroundColor: theme.palette.secondary[500],
    "&:hover": {
      backgroundColor: theme.palette.secondary[700],
    },
  },
  bottomMargin: {
    marginBottom: "5rem",
  },
}));

const navBarLinks = [
  {
    link: "",
    text: "Home",
  },
  {
    link: "aboutme",
    text: "About Me",
  },
  {
    link: "blog",
    text: "Blog",
  },
  {
    link: "contact",
    text: "Contact Me",
  },
];

const Header = (props) => {
  const classes = useStyles();
  const { active } = props;

  return (
    <Container>
      <Typography gutterBottom align="center" color="primary" variant="h2">
        Alex Gilmer's Blog
      </Typography>
      <Grid container justify="center" spacing={2}>
        {navBarLinks.map((page) => (
          <Grid item>
            <Link className={classes.linkStyles} to={`/${page.link}`}>
              <Paper
                className={
                  active === page.link
                    ? classes.activePaperStyles
                    : classes.paperStyles
                }
              >
                <Typography variant="button">{page.text}</Typography>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Header;
