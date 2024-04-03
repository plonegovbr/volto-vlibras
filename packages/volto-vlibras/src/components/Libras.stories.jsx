import React from 'react';
import Libras from './Libras';
import Wrapper from '@plone/volto/storybook';

const withWrapper = (Story, { args }) => {
  return (
    <Wrapper anonymous>
      <div
        style={{ width: '1000px', height: '800px', backgroundColor: 'white' }}
      >
        <Story {...args} />
      </div>
    </Wrapper>
  );
};

export default {
  title: 'Public/VLibras',
  component: Libras,
  decorators: [withWrapper],
  args: {
    location: {
      pathname: '/',
    },
  },
};

export const VisibleOnContent = {
  args: {
    location: {
      pathname: '/',
    },
  },
};
export const HiddenOnEdit = {
  args: {
    location: {
      pathname: '/edit',
    },
  },
};
