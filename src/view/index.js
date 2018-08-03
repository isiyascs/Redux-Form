import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => ({
    name: state.handle.name,
    age: state.handle.age,
    address: state.handle.address,
    designation: state.handle.designation,
    salary: state.handle.salary,
    appraisal: state.handle.appraisal,
    newSalary: state.handle.newSalary
});
class DataClass extends React.Component {
    render() {
        return (
            <div>
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
export default connect(mapStateToProps)(DataClass);
