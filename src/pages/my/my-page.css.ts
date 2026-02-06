import { style } from '@vanilla-extract/css';

export const wrap = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 32,
	padding: 40,
	maxWidth: 800,
	margin: '0 auto',
});

export const title = style({
	fontSize: 24,
	fontWeight: 700,
	color: '#252525',
});

export const myPageStyles = {
	wrap,
	title,
};
