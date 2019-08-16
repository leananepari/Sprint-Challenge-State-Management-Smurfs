import React from 'react';
import { Form as FormikForm, Field, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.status !== prevProps.status && this.props.status) {
      this.props.getData();
    }
  }

  render() {
  return (
    <div>
    <div className="form">
      <h2 style={{marginBottom: '0', color: 'rgb(89, 95, 99)'}}>Add a Smurf to you Village</h2>
      <FormikForm style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
        <label>
          <p style={{margin: '0', textAlign: 'left', marginLeft: '5px', color: 'rgb(89, 95, 99)'}}>
             name</p>
          <Field type="text" name="name" placeholder="name" />
          {this.props.touched.name && this.props.errors.name && (
            <p className="error">{this.props.errors.name}</p>
          )}
        </label>
        <label>
          <p style={{margin: '0', textAlign: 'left', marginLeft: '5px', color: 'rgb(89, 95, 99)'}}>
             age</p>
          <Field type="text" name="age" placeholder="age" />
          {this.props.touched.age && this.props.errors.age && (
            <p className="error">{this.props.errors.age}</p>
          )}
        </label>
        <label>
          <p style={{margin: '0', textAlign: 'left', marginLeft: '5px', color: 'rgb(89, 95, 99)'}}>
             height</p>
          <Field type="text" name="height" placeholder="height" />
          {this.props.touched.height && this.props.errors.height && (
            <p className="error">{this.props.errors.height}</p>
          )}
        </label>
        <div>
          <button type="submit">Add</button>
          <button className="close-btn" onClick={this.props.setForm}>Close</button>
        </div>
      </FormikForm>
    </div>
    </div>
  )
  }
}

const FormikRegisterForm = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || '',
      age: age || '',
      height: height || ''
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.string().required(),
    height: Yup.string().required()
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post('http://localhost:3333/smurfs', values)
      .then(res => {
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(Form);

export default FormikRegisterForm;