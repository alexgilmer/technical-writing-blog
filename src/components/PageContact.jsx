import { Container, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  linkCardStyles: { margin: "1rem" },
}));
const PageContact = (props) => {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.linkCardStyles}>
        <CardContent>
          <a href="https://www.linkedin.com/in/alex-gilmer-4bb6b6210">
            <Typography variant="body1">My LinkedIn Profile</Typography>
          </a>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PageContact;
