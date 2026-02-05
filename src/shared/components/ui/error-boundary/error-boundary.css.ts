import { style, styleVariants } from '@vanilla-extract/css';

const base = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '32px',
	gap: '16px',
	textAlign: 'center',
});

export const container = styleVariants({
	fullscreen: [
		base,
		{
			minHeight: '100vh',
		},
	],
	inline: [
		base,
		{
			minHeight: '200px',
			borderRadius: '8px',
			backgroundColor: '#fef2f2',
		},
	],
});

export const title = style({
	fontSize: '20px',
	fontWeight: 600,
	color: '#991b1b',
	margin: 0,
});

export const message = style({
	fontSize: '14px',
	color: '#7f1d1d',
	margin: 0,
	maxWidth: '400px',
});

export const retryButton = style({
	padding: '8px 16px',
	fontSize: '14px',
	fontWeight: 500,
	color: '#ffffff',
	backgroundColor: '#dc2626',
	border: 'none',
	borderRadius: '6px',
	cursor: 'pointer',
	transition: 'background-color 0.2s',
	':hover': {
		backgroundColor: '#b91c1c',
	},
	':focus-visible': {
		outline: '2px solid #dc2626',
		outlineOffset: '2px',
	},
});
