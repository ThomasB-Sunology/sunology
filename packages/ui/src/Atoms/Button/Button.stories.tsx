import { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
	args: {
		children: 'Button',
	},
}
export default meta

type Story = StoryObj<typeof Button>

export const Overview: Story = {
	args: {},
}

export const Primary: Story = {
	args: {},
}

export const Secondary: Story = {
	args: {
		intent: 'secondary',
	},
}

export const Tertiary: Story = {
	render: (args) => (
		<Button {...args}>
			Button
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					d="M9 6L15 12L9 18"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</Button>
	),
	args: {
		intent: 'tertiary',
	},
}

export const Outline: Story = {
	args: {
		intent: 'outline',
	},
}
