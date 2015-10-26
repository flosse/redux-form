import React from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['id', 'name', 'color'];

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.color) {
    errors.color = 'Required';
  } else if (!/^[0-9A-F]{6}$/i.test(values.color)) {
    errors.color = 'Invalid color';
  }
  return errors;
};

const BandForm = props => {
  const {
    fields: {name, color},
    handleSubmit,
    pristine,
    resetForm
  } = props;
  return (<form style={{display: 'flex'}} onSubmit={handleSubmit}>
      <div style={{flex: 1}} className={'form-group' + (name.touched && name.error ? ' has-error' : '')}>
        <input type="text" className="form-control" style={{display: 'inline', width: name.touched && name.error ? '50%' : '100%'}} placeholder="Band" {...name}/>
        {name.touched && name.error && <div style={{width: '50%', display: 'inline', paddingLeft: 10}} className="help-block">{name.error}</div>}
      </div>
      <div style={{flex: 1}} className={'form-group' + (color.touched && color.error ? ' has-error' : '')}>
        <input type="text" className="form-control" style={{display: 'inline', width: color.touched && color.error ? '50%' : '100%'}} placeholder="Favorite Color" {...color}/>
        {color.touched && color.error && <div style={{width: '50%', display: 'inline', paddingLeft: 10}} className="help-block">{color.error}</div>}
      </div>
      <button style={{width: 72, height: 34}} className="btn btn-primary" disabled={pristine} onClick={handleSubmit}>Submit</button>
      <button style={{width: 72, height: 34}} className="btn btn-default" disabled={pristine} onClick={resetForm}>Cancel</button>
    </form>
  );
};

export default reduxForm({
  form: 'band',
  fields,
  validate
})(BandForm);
