import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {},
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
  container: {
    [theme.breakpoints.up("sm")]: {
      padding: "10px 10px",
    },
  },
}));
