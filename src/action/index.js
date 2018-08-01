export const formHandler = (
  formName,
  formAge,
  formAddress,
  formDesignation,
  formSalary,
  formAppraisal
) => ({
  type: exampleActions.FORM_SUBMIT,
  value1: formName,
  value2: formAge,
  value3: formAddress,
  value4: formDesignation,
  value5: formSalary,
  value6: formAppraisal
});
export const exampleActions = {
  FORM_SUBMIT: "FORM_SUBMIT"
};
