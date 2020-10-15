import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {},
  search: {
    position: "relative",
    height: theme.spacing(6),
  },
  searchIcon: {
    position: "absolute",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: theme.spacing(6),
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  inputInput: {
    paddingLeft: theme.spacing(7),
  },
}));
