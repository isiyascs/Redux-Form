const initialState = {
  name: "",
  age: 0,
  address: "",
  designation: "",
  salary: 0,
  newSalary: 0,
  appraisal: 0
};
const handle = (state = initialState, action) => {
  switch (action.type) {
    case "FORM_SUBMIT":
      console.log(action.value2);
      return {
        ...state,
        name: action.value1,
        age: action.value2,
        address: action.value3,
        designation: action.value4,
        salary: action.value5,
        appraisal: action.value6,
        newSalary: parseInt(action.value5) + parseInt(action.value6)
      };
    default:
      return state;
  }
};
export default handle;
