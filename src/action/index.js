export const formHandler = (
  formName,
  formAge,
  formAddress,
  formDesignation,
  formSalary,
  formAppraisal
) => ({
  type: formActions.FORM_SUBMIT,
  actionName: formName,
  actionAge: formAge,
  actionAddress: formAddress,
  actionDesignation: formDesignation,
  actionSalary: formSalary,
  actionAppraisal: formAppraisal
});
export const formActions = {
  FORM_SUBMIT: "FORM_SUBMIT"
};
