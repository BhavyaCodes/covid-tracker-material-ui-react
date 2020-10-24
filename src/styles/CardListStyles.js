import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    // padding: `${theme.spacing(10)}` + `${theme.spacing(10)}`,
    // paddingLeft: theme.spacing(0),
    // paddingRight: theme.spacing(0),
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
      paddingBottom: theme.spacing(2),
    },
  },
}));
