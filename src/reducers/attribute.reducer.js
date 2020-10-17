const reducer = (state, action) => {
  switch (action.type) {
    case "confirmed": {
      return "confirmed";
    }
    case "active": {
      return "active";
    }
    case "recovered": {
      return "recovered";
    }
    case "deceased": {
      return "deceased";
    }
    default: {
      return state;
    }
  }
};

export default reducer;
