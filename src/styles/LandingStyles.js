import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "70px",
    },
  },
  left: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
  right: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      padding: "10px 10px",
    },
  },
}));
