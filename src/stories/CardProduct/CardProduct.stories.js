import React from 'react';
import CardProduct from './CardProduct';

export default {
  title: 'Components/Card Product',
  tags: ['autodocs'],
  component: CardProduct,
};

const Template = (args) => <CardProduct {...args} />;

export const WithImage = Template.bind({});
WithImage.args = {
  withImage: true,
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  withImage: false,
};
