import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
    },
  },
  number: {
    fontSize: "1.8rem",
    fontWeight: theme.typography.fontWeightBold,
  },
  red: {
    color: "rgba(255, 16, 67, 1)",
  },
  green: {
    color: "rgba(40, 167, 69, 1)",
  },
  blue: {
    color: "rgba(4, 123, 255, 1)",
  },
  grey: {
    color: "rgba(108, 117, 125, 1)",
  },
  type: {
    opacity: 0.5,
  },
}));
