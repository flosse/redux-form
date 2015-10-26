import React from 'react';
import AlternateMountPointForm, {fields} from '../../examples/AlternateMountPointForm';
import Example from '../../components/Example';
import explanation from './AlternateMountPoint.md';
import raw from '!!raw!../../examples/AlternateMountPointForm';

const AlternateMountPoint = () =>
  <Example
    name="Alternate Redux Mount Point"
    explanation={explanation}
    component={AlternateMountPointForm}
    form="alternateMountPoint"
    fields={fields}
    files={{'AlternateMountPointForm.js': raw}}
    reduxMountPoint="alternate"/>;

export default AlternateMountPoint;
