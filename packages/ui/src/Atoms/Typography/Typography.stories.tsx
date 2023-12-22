import { Meta, StoryObj } from '@storybook/react'
import Suiktheme from '@sunology/tailwind-preset'
import { Typography } from './Typography'

const meta: Meta = {
	title: 'Guidelines/Typography',
	render: () => {
		return (
			<div className="flex flex-col flex-wrap gap-4">
				{Suiktheme.theme.fontSize &&
					Object.keys(Suiktheme.theme.fontSize)
						.reverse()
						.map((fs) => {
							return (
								<Typography intent={fs} key={fs}>
									Lorem ipsum.
								</Typography>
							)
						})}
			</div>
		)
	},
}

export default meta

type Story = StoryObj

export const Overview: Story = {}
