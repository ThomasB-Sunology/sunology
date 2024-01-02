import { Meta, StoryObj } from '@storybook/react'
import { Logos } from './Logos'

const meta: Meta<typeof Logos> = {
	title: 'Atoms/Logos',
	component: Logos,
	render: ({ logo, ...props }) => {
		return (
			<div className="bg-background-black p-4">
				<Logos logo={logo} {...props} />
			</div>
		)
	},
	args: {
		logo: 'Play',
	},
}

export default meta

type Story = StoryObj<typeof Logos>

export const Overview: Story = {}
