import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  h2Styles: {
    margin: "1rem auto",
  },
}));

const PageHome = (props) => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm">
        <Typography className={classes.h2Styles} variant="h2">
          #Splash_Page
        </Typography>
      </Container>
    </>
  );
};

export default PageHome;
