import React from "react";
import { connect } from "react-redux";
import { formHandler } from "./action";

const mapStateToProps = state => ({
  name: state.handle.name,
  age: state.handle.age,
  address: state.handle.address,
  designation: state.handle.designation,
  salary: state.handle.salary,
  appraisal: state.handle.appraisal,
  newSalary: state.handle.newSalary
});

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

class Example extends React.Component {
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
        <button onClick={this.props.handleForm}>SUBMIT</button>
        <p>NAME:{this.props.name}</p>
        <p>AGE:{this.props.age}</p>
        <p>ADDRESS:{this.props.address}</p>
        <p>DESIGNATION:{this.props.designation}</p>
        <p>SALARY:{this.props.salary}</p>
        <p>APPRAISAL:{this.props.appraisal}</p>
        <p>NEW SLARY{this.props.newSalary}</p>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
