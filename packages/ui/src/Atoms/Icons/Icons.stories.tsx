import { Meta, StoryObj } from '@storybook/react'
import { ChevronDown, ChevronUp, Info, Profile } from '../Icons'

const meta: Meta = {
	title: 'Atoms/Icons',
	render: () => {
		return (
			<div className="text-black flex flex-row flex-wrap gap-4">
				<Profile className="group w-10 h-10" />
				<ChevronUp className="group w-10 h-10" />
				<ChevronDown className="group w-10 h-10" />
				<Info className="group w-10 h-10" />
			</div>
		)
	},
}

export default meta

type Story = StoryObj

export const Overview: Story = {}
