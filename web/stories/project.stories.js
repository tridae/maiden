import React from 'react';

import { fromJS } from 'immutable';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Badge from '../src/components/badge';
import TextButton from '../src/components/text-button';
import ProjectInfo from '../src/components/project-info';
import ProjectControl from '../src/components/project-control';

const mockProject = fromJS({
  'project_name': 'meso',
  'description': 'abstractions to build on',
  'tags': [
    'midi',
    'grid',
    'lib'
  ],
  'version': "1.3.2",
});

storiesOf('Projects', module)
  .add('text badges', () => (
    <span>
      <Badge>midi</Badge>
      <Badge>arc</Badge>
      <Badge>grid</Badge>
    </span>
  ))
  .add('text button', () => (
    <div>
      <TextButton color="hsl(0, 0%, 59%)" action={action('install')}>
        install
      </TextButton>
      <TextButton color="hsl(0, 0%, 59%)" action={action('disabled')}disabled={true}>
        disabled
      </TextButton>
    </div>
  ))
  .add('info', () => (
    <div style={{'width': 400}}>
      <ProjectInfo project={mockProject} />    
    </div>
  ))
  .add('install project entry', () => (
    <div style={{'width': 600}}>
      <ProjectControl>
        <ProjectInfo project={mockProject} />
        <TextButton color="hsl(0, 0%, 59%)" action={action('install')}>install</TextButton>
        <TextButton color="hsl(0, 0%, 59%)" action={action('remove')}>remove</TextButton>
      </ProjectControl>
    </div>
  ));
