import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
      paddingBottom: theme.spacing(2),
    },
  },
}));
