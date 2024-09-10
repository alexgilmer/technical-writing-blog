import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textCardStyles: {
    margin: "1rem 0",
    backgroundColor: theme.palette.primary[500],
    color: "white",
  },
  h2Styles: {
    margin: "1rem auto",
  },
}));

export default function BlogParagraph({ children }) {
  const classes = useStyles();

  return (
    <Card className={classes.textCardStyles}>
      <CardContent>
        <Typography variant="body1" align="justify">
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
}
