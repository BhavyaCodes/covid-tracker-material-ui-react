import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
}));
