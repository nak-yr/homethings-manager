import { EDIT, CLOSE } from "../actions";

const initialState = { showEdit: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT:
      return { showEdit: true };
    case CLOSE:
      return { showEdit: false };
    default:
      return { showEdit: state.showEdit };
  }
};
