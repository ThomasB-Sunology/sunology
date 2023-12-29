import { Meta, StoryObj } from '@storybook/react'
import { ChevronDown, ChevronUp, Info, Profile } from '../Icons'

const meta: Meta = {
	title: 'Atoms/Icons',
	render: () => {
		return (
			<div className="flex flex-row flex-wrap gap-4 text-black">
				<Profile className="group h-10 w-10" />
				<ChevronUp className="group h-10 w-10" />
				<ChevronDown className="group h-10 w-10" />
				<Info className="group h-10 w-10" />
			</div>
		)
	},
}

export default meta

type Story = StoryObj

export const Overview: Story = {}
