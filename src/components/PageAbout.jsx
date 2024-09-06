import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  imgCardStyles: {
    display: "flex",
    flexFlow: "row",
    margin: "1rem 0",
    backgroundColor: theme.palette.secondary[500],
    color: "white",
  },
  imgStyles: {
    width: "33%",
  },
  sideTextStyles: {
    width: "66%",
  },
  textCardStyles: {
    margin: "1rem 0",
    backgroundColor: theme.palette.primary[500],
    color: "white",
  },
  h2Styles: {
    margin: "1rem auto",
  },
}));

const PageAbout = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Card className={classes.imgCardStyles}>
        <CardMedia
          className={classes.imgStyles}
          component="img"
          alt="My face"
          image="My Face.jpg"
        />

        <CardContent className={classes.sideTextStyles}>
          <Typography variant="body1" align="justify">
            Hey there! My name is <span className="underline">Alex Gilmer</span>
            . My friends call me "Possum" because when people ask me how I'm
            doing, I always answer with{" "}
            <strong>"awesome like a possum!"</strong>
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.textCardStyles}>
        <CardContent>
          <Typography variant="body1" align="justify">
            Born and raised in{" "}
            <a href="https://goo.gl/maps/HfdVoyRVS8wuRmeP9">
              Winnipeg, Manitoba
            </a>
            , I got my first introduction to technology at a young age. My
            father was a science-fiction geek, and he made sure to pass that{" "}
            <strong>wonder and excitement</strong> on to me. There's been a
            computer in every home I've ever had, growing up and in my adult
            life. I enjoy tinkering with them, learning how they work, and{" "}
            <strong>understanding what makes them tick</strong>. My hobbies have
            always included computer science-adjacent activities such as
            programming and video games. Programming-like games such as{" "}
            <a href="https://www.zachtronics.com/spacechem/">Spacechem</a>,
            optimization of idle games, and{" "}
            <a href="https://civilization.com/civilization-5/">
              grand strategy
            </a>{" "}
            are among my favourites.{" "}
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.textCardStyles}>
        <CardContent>
          <Typography variant="body1" align="justify">
            My first foray into the workforce happened shortly after high
            school. I hopped between several different jobs early on but
            eventually came to work at{" "}
            <a href="https://www.casinosofwinnipeg.com/club-regent-casino-home/">
              Club Regent Casino
            </a>
            . I started there as a mere Blackjack dealer in 2008 and worked my
            way up over the 12 years that followed. While I certainly enjoyed
            myself there, I always felt that I could{" "}
            <strong>put my skills to better use</strong>. When the coronavirus
            pandemic forced the casino to close its doors in 2020, I knew it was
            time for a change.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.textCardStyles}>
        <CardContent>
          <Typography variant="body1" align="justify">
            I enrolled in the Software Developer program at{" "}
            <a href="https://mitt.ca/">MITT</a> and quickly moved to the{" "}
            <strong>top of my class</strong>. I enjoy learning about my hobby at
            a professional level, and the remote nature of society induced by
            COVID-19 lends itself well to this line of work.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.textCardStyles}>
        <CardContent>
          <Typography variant="body1" align="justify">
            My dream job would be in artificial intelligence (
            <strong>AI</strong>) <strong>research</strong>. I have a strong
            desire to <strong>help people</strong>, and I think that advanced AI
            and neural networks will push that goal the farthest. I think it
            would be utterly incredible if, in some <em>far-flung future</em>,
            my digital fingerprints were on the AI that we send to{" "}
            <strong>explore the stars</strong>, the bot that finds the{" "}
            <strong>cure for cancer</strong>, or the{" "}
            <strong>nanotechnology</strong> we use for constructing
            megaprojects.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PageAbout;
