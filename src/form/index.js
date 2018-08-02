import React from "react";
import { formHandler } from "../action";
import { connect } from "react-redux";
import "../style.css";
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
      <div className="form-div">
        Name:<br /><input type="text" id="formName" className="formdata" />
        <br />
        <br />
        Age:<br /><input type="number" id="formAge" className="formdata"/>
        <br />
        <br />
        Address:<br /><input type="text" id="formAddress" className="formdata"/>
        <br />
        <br />
        Designation:<br /><input type="text" id="formDesignation" className="formdata"/>
        <br />
        <br />
        Salary:<br /><input type="number" id="formSalary" className="formdata"/>
        <br />
        <br />
        Appraisal:<br /><input type="number" id="formAppraisal" className="formdata"/>
        <br />
        <br />
        <input type="button" onClick={this.props.handleForm} value="ADD" className="btn" />
      </div>
    );
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Forms);
