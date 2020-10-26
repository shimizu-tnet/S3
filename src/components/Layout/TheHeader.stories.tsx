import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { TheHeader } from 'components/Layout/TheHeader';

export default {
  title: 'Components/Layout/TheHeader',
  component: TheHeader,
} as Meta;

export const Default = () => <TheHeader />;
