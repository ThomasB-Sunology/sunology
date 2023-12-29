import { Meta, StoryObj } from '@storybook/react'
import Suiktheme from '@sunology/tailwind-preset'

const meta: Meta = {
	title: 'Guidelines/Colors',
	render: () => {
		return (
			<div className="flex flex-row flex-wrap gap-4">
				{Suiktheme.theme.colors &&
					Object.entries(Suiktheme.theme.colors).map(([k, v]) => {
						if (
							typeof v === 'string' &&
							(v.match(/^#/) ||
								v.match(/^rgb/) ||
								k.match(/color/i))
						) {
							return (
								<div className="flex flex-col gap-2">
									<span className="text-xs dark:text-white">
										{k}
									</span>
									<div
										className="h-20 min-w-40 rounded-md"
										style={{ backgroundColor: v }}
									></div>
								</div>
							)
						}
						return null
					})}
			</div>
		)
	},
}

export default meta

type Story = StoryObj

export const Overview: Story = {}
