import { formActions } from "../action";

const initialState = {
  name: "",
  age: 0,
  address: "",
  designation: "",
  salary: 0,
  newSalary: 0,
  appraisal: 0
};
const stateChange = (state = initialState, action) => {
  switch (action.type) {
    case formActions.FORM_SUBMIT:
      return {
        ...state,
        name: action.actionName,
        age: action.actionAge,
        address: action.actionAddress,
        designation: action.actionDesignation,
        salary: action.actionSalary,
        appraisal: action.actionAppraisal,
        newSalary: parseInt(action.actionSalary) + parseInt(action.actionAppraisal)
      };
    default:
      return state;
  }
};
export default stateChange;
