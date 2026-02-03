import { style } from '@vanilla-extract/css';

import { flexCenter, flexColumn } from '@/shared/styles/flex.css';

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

const inputError = style({
	width: '100%',
	padding: 12,
	border: '1px solid #dc2626',
	borderRadius: 10,
	outline: '1px solid #dc2626',
});

const errorMessage = style({
	alignSelf: 'flex-start',
	color: '#dc2626',
	fontSize: 12,
	fontWeight: 500,
});

const button = style({
	width: '100%',
	padding: 12,
	background: '#252525',
	color: '#fff',
	borderRadius: 10,
	fontWeight: 700,
	height: 40,
});

export const loginFormStyles = {
	form,
	label,
	button,
	input,
	inputError,
	errorMessage,
};
