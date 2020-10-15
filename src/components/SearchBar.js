import React from "react";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "../styles/SearchStyles";

function SearchBar() {
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.root}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder={`...`}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>
    </Paper>
  );
}

export default SearchBar;
