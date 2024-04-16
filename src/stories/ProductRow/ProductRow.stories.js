import React from 'react';
import { ProductRow } from './ProductRow';

export default {
  title: 'Components/Product Row',
  component: ProductRow,
};

const Template = (args) => <ProductRow {...args} />;

export const SingleProduct = Template.bind({});
SingleProduct.args = {
  nome: 'Product Name',
};

export const MultipleProducts = () => (
  <div>
    <ProductRow nome="Product 1" />
    <ProductRow nome="Product 2" />
    <ProductRow nome="Product 3" />
  </div>
);
