import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  selectorContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  formControl: {
    marginRight: theme.spacing(1),
    minWidth: "200px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  btnGroupDuration: {
    marginLeft: "auto",
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  btnGroupType: {
    marginLeft: "auto",
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));
