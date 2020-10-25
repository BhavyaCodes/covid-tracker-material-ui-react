import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    position: "relative",
    minHeight: "100vh",
  },
  logo: {
    maxHeight: "30px",
  },
  navItemsRight: {
    margin: "auto",
    marginRight: 0,
  },
  content: {
    [theme.breakpoints.down("sm")]: {
      padding: "0 0",
    },
    paddingBottom: 100,
  },
  footer: {
    top: "auto",
    bottom: 0,
  },
  footerIcons: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
