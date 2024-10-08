import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { NxButtonComponent } from 'nx-demo';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<NxButtonComponent> = {
  title: 'Example/Button',
  component: NxButtonComponent,
  tags: ['autodocs'],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), label: 'Simple Button' },
};

export default meta;
type Story = StoryObj<NxButtonComponent>;

export const Default_button: Story = {
  args: {
    label: 'Default',
  },
};

export const Danger_button: Story = {
  args: {
    label: 'Danger',
    styleClass: 'danger',
  },
};

export const Success_button: Story = {
  args: {
    label: 'Success',
    styleClass: 'success',
  },
};

export const Warning_button: Story = {
  args: {
    label: 'Warning',
    styleClass: 'warning',
  },
};
