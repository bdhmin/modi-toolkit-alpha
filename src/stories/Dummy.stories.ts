import { StoryFn, Meta, StoryObj } from '@storybook/react';
import Dummy from '../components/Dummy/Dummy';

const meta = {
  title: "Test/Dummy",
  component: Dummy,
} satisfies Meta<typeof Dummy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};