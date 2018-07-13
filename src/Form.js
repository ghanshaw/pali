import React, { Component } from 'react';
import { FieldGroup, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class DemoForm extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     numField: "",
        // }
        this.nameField = "";
        this.companyField = "";
        this.numField = "";
        this.emailField = "";
        this.phonefield = "";
    }

    handleChange(e) {
        // this.setState({ value: e.target.value });
    }
    

    render() {
        return (
            <form>
                <FormControl
                type="text"
                placeholder="Name"
                />

                <FormControl
                type="text"
                placeholder="Company"
                />

                <FormControl
                type="text"
                placeholder="Number of Employees"
                />

                <FormControl
                type="text"
                placeholder="Email"
                />

                <FormControl
                type="text"
                placeholder="Phone Number (optional)"
                />
              </form>
        )
    }
}

export default DemoForm;