export const formHandler = (
  formName,
  formAge,
  formAddress,
  formDesignation,
  formSalary,
  formAppraisal
) => ({
  type: exampleActions.FORM_SUBMIT,
  actionName: formName,
  actionAge: formAge,
  actionAddress: formAddress,
  actionDesignation: formDesignation,
  actionSalary: formSalary,
  actionAppraisal: formAppraisal
});
export const exampleActions = {
  FORM_SUBMIT: "FORM_SUBMIT"
};
