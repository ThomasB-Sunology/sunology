import { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography'

const meta: Meta = {
	title: 'Guidelines/Typography',
	component: Typography,
	args: {
		children: 'Lorem ipsum',
	},
}

export default meta

type Story = StoryObj

export const Overview: Story = {}
