import { Meta, StoryObj } from '@storybook/react'
import { Icons } from '../Icons'

const meta: Meta<typeof Icons> = {
	title: 'Atoms/Icons',
	component: Icons,
	args: {
		icon: 'Info',
		className: 'group h-10 w-10',
	},
}

export default meta

type Story = StoryObj<typeof Icons>

export const Overview: Story = {}
