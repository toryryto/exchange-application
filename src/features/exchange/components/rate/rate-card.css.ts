import { style } from '@vanilla-extract/css';

export const wrap = style({
	width: 220,
	padding: 16,
	border: '1px solid #e5e5e5',
	borderRadius: 8,
});

export const header = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: 8,
});

export const currencyCode = style({
	fontSize: 14,
	fontWeight: 600,
	color: '#252525',
});

export const currencyName = style({
	fontSize: 12,
	color: '#9a9a9a',
});

export const rate = style({
	fontSize: 20,
	fontWeight: 700,
	color: '#252525',
	marginBottom: 4,
});

export const changePositive = style({
	fontSize: 12,
	fontWeight: 500,
	color: '#e53935',
});

export const changeNegative = style({
	fontSize: 12,
	fontWeight: 500,
	color: '#1e88e5',
});

export const srOnly = style({
	position: 'absolute',
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: 'hidden',
	clip: 'rect(0, 0, 0, 0)',
	whiteSpace: 'nowrap',
	border: 0,
});
