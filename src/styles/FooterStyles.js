import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer: {
    top: "auto",
    bottom: 0,
  },
  footerIcons: {
    display: "flex",
    justifyContent: "space-between",
  },
  a: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));
