import { CommonModule } from '@angular/common';
import { APP_INITIALIZER } from '@angular/core';

import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { AlertDemoComponent } from './alert-demo.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

const meta: Meta<AlertDemoComponent> = {
  title: 'Example/Alert',
  component: AlertDemoComponent,
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
};

export default meta;
type Story = StoryObj<AlertDemoComponent>;

export const successBtn: Story = {
  args: {
    showSuccessButton: true,
  },
};
export const DangerButton: Story = {
  args: {
    showDangerButton: true,
  },
};
export const WarningButton: Story = {
  args: {
    showWarningButton: true,
  },
};
