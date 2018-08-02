import React from "react";
import { formHandler } from "../action";
import { connect } from "react-redux";
const mapDispatchToProps = dispatch => ({
  handleForm: () =>
    dispatch(
      formHandler(
        document.getElementById("formName").value,
        document.getElementById("formAge").value,
        document.getElementById("formAddress").value,
        document.getElementById("formDesignation").value,
        document.getElementById("formSalary").value,
        document.getElementById("formAppraisal").value
      )
    )
});
class Forms extends React.Component {
  render() {
    return (
      <div>
        Name:<input type="text" id="formName" />
        <br />
        <br />
        Age:<input type="number" id="formAge" />
        <br />
        <br />
        Address:<input type="text" id="formAddress" />
        <br />
        <br />
        Designation:<input type="text" id="formDesignation" />
        <br />
        <br />
        Salary:<input type="number" id="formSalary" />
        <br />
        <br />
        Appraisal:<input type="number" id="formAppraisal" />
        <br />
        <br />
        <input type="button" onClick={this.props.handleForm} value="ADD" />
      </div>
    );
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Forms);
