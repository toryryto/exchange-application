import { style } from '@vanilla-extract/css';

import { flexCenter, flexColumn } from '@/styles/flex.css';

const form = style([
	flexColumn,
	flexCenter,
	{
		gap: 12,
		background: '#f8f8f8',
		borderRadius: 10,
		width: 400,
		padding: 18,
	},
]);

const label = style({
	alignSelf: 'flex-start',
	color: '#6a6a6a',
	fontSize: 12,
});

const input = style({
	width: '100%',
	padding: 12,
	border: '1px solid #eaeaea',
	borderRadius: 10,
});

const button = style({
	width: '100%',
	padding: 12,
	background: '#252525',
	color: '#fff',
	borderRadius: 10,
	fontWeight: 700,
});

export const loginFormStyles = {
	form,
	label,
	button,
	input,
};
