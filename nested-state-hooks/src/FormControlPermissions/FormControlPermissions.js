import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function CheckboxLabels({ handleChange, state }) {


  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.create}
            onChange={handleChange('create')}
            value="create"
            color="primary"
          />
        }
        label="create"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.read}
            onChange={handleChange('read')}
            value="read"
            color="primary"
          />
        }
        label="read"
      />
      <FormControlLabel
        control={
          <Checkbox
          checked={state.write}
          onChange={handleChange('write')}
          value="write"
          color="primary"
          />
        }
        label="write"
      />
    </FormGroup>
  );
}