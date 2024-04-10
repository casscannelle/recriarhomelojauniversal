import React from 'react';
import CardComponent from './CardComponent';

export default {
  title: 'Components/Card',
  tags: ['autodocs'],
  component: CardComponent,
};

const Template = (args) => <CardComponent {...args} />;

export const WithImage = Template.bind({});
WithImage.args = {
  withImage: true,
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  withImage: false,
};
