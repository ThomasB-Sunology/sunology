import { Meta, StoryObj } from '@storybook/react';
import { City, Play, PlayGo, PlayMax } from './Logos';

const meta: Meta = {
	title: 'Atoms/Logos',
	render: () => {
		return (
			<div className="bg-background-black flex flex-col flex-wrap gap-4 p-4">
				<Play />
				<City />
				<PlayMax />
				<PlayGo />
			</div>
		);
	},
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {};
