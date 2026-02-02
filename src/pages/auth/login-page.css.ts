import { style } from '@vanilla-extract/css';

import { flexCenter, flexColumn } from '@/styles/flex.css';

const section = style([
	flexColumn,
	flexCenter,
	{
		height: '100%',
		gap: 16,
	},
]);

const titleWrap = style([
	flexColumn,
	flexCenter,
	{
		gap: 12,
	},
]);

const title = style({
	fontSize: 32,
	color: '#252525',
});

const subTitle = style({
	fontSize: 20,
	color: '#9a9a9a',
	fontWeight: 400,
});

export const loginPageStyles = {
	section,
	titleWrap,
	title,
	subTitle,
};
