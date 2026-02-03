import { style } from '@vanilla-extract/css';

import { alignCenter, flexBetween } from '@/shared/styles/flex.css';

const wrap = style([
	flexBetween,
	alignCenter,
	{
		padding: 18,
	},
]);

const logo = style({
	fontSize: 32,
	fontWeight: 700,
	color: '#252525',
});

const menu = style([
	flexBetween,
	alignCenter,
	{
		width: 240,
		margin: 0,
		padding: 0,
		listStyle: 'none',
	},
]);

const linkText = style({
	fontWeight: 600,
	color: '#9a9a9a',
	textDecoration: 'none',
});

const linkTextActive = style({
	fontWeight: 600,
	color: '#252525',
	textDecoration: 'none',
});

const logoutButton = style({
	background: '#252525',
	borderRadius: 10,
	padding: '8px 12px',
	color: '#fff',
});

export const headerStyles = {
	wrap,
	logo,
	menu,
	linkText,
	linkTextActive,
	logoutButton,
};
