import { Meta, StoryObj } from '@storybook/react';

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './Tooltip';

const meta: Meta<typeof TooltipTrigger> = {
	title: 'Atoms/Tooltip',
	component: TooltipTrigger,
	render: ({ intent, asChild }) => (
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger intent={intent} asChild={asChild}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M17 3.34001C18.5083 4.21087 19.7629 5.46054 20.6398 6.96531C21.5167 8.47009 21.9854 10.1778 21.9994 11.9194C22.0135 13.6609 21.5725 15.376 20.72 16.8947C19.8676 18.4135 18.6332 19.6832 17.1392 20.5783C15.6452 21.4734 13.9434 21.9628 12.2021 21.9981C10.4608 22.0333 8.74055 21.6132 7.21155 20.7793C5.68256 19.9453 4.39787 18.7265 3.48467 17.2435C2.57146 15.7605 2.06141 14.0647 2.005 12.324L2 12L2.005 11.676C2.061 9.94901 2.56355 8.26598 3.46364 6.79101C4.36373 5.31604 5.63065 4.09947 7.14089 3.2599C8.65113 2.42033 10.3531 1.98641 12.081 2.00045C13.8089 2.01449 15.5036 2.47601 17 3.34001ZM15.707 9.29302C15.5348 9.12084 15.3057 9.01741 15.0627 9.00213C14.8197 8.98685 14.5794 9.06076 14.387 9.21001L14.293 9.29302L11 12.585L9.707 11.293L9.613 11.21C9.42058 11.0609 9.18037 10.987 8.9374 11.0024C8.69444 11.0177 8.46541 11.1211 8.29326 11.2933C8.12112 11.4654 8.01768 11.6945 8.00235 11.9374C7.98702 12.1804 8.06086 12.4206 8.21 12.613L8.293 12.707L10.293 14.707L10.387 14.79C10.5624 14.9261 10.778 14.9999 11 14.9999C11.222 14.9999 11.4376 14.9261 11.613 14.79L11.707 14.707L15.707 10.707L15.79 10.613C15.9393 10.4206 16.0132 10.1804 15.9979 9.93733C15.9826 9.69431 15.8792 9.46521 15.707 9.29302Z"
							fill="#EDFF00"
						/>
					</svg>
					Hover me
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z"
							stroke="#CFCFCF"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12 9H12.01"
							stroke="#CFCFCF"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M11 12H12V16H13"
							stroke="#CFCFCF"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</TooltipTrigger>
				<TooltipContent>
					<p>Add to library</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	),
};
export default meta;

type Story = StoryObj<typeof TooltipTrigger>;

export const Overview: Story = {
	args: {
		intent: 'dark',
		asChild: false,
	},
};

export const AsChild: Story = {
	render: ({ intent, asChild }) => (
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger intent={intent} asChild={asChild}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z"
							stroke="#CFCFCF"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M12 9H12.01"
							stroke="#CFCFCF"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M11 12H12V16H13"
							stroke="#CFCFCF"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</TooltipTrigger>
				<TooltipContent>
					<p>Add to library</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	),
	args: {
		asChild: true,
	},
};
