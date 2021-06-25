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
  logoCardStyles: {
    margin: "0 4rem",
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
        <Card className={classes.logoCardStyles}>
          <CardContent>
            <Typography align="center" variant="body1">
              Welcome to the home page of the Awesome Possum!
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            alt="A cutely drawn possum with a red robotic eye"
            width="100px"
            image="possum_bot_logo.jpg"
          />
          <CardContent>
            <Typography align="center" variant="body1">
              Please choose from one of the navigation options at the{" "}
              <a href="#">top</a>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default PageHome;
