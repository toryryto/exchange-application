import { style } from '@vanilla-extract/css';

const wrap = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 16,
});

const title = style({
	fontSize: 18,
	fontWeight: 700,
	color: '#252525',
});

const list = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 12,
	listStyle: 'none',
	padding: 0,
	margin: 0,
});

const item = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: 16,
	border: '1px solid #e5e5e5',
	borderRadius: 8,
});

const itemLeft = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 4,
});

const itemType = style({
	fontSize: 14,
	fontWeight: 600,
	color: '#252525',
});

const itemDate = style({
	fontSize: 12,
	color: '#9a9a9a',
});

const itemRight = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-end',
	gap: 4,
});

const itemFrom = style({
	fontSize: 14,
	color: '#6b6b6b',
});

const itemTo = style({
	fontSize: 16,
	fontWeight: 600,
	color: '#252525',
});

const itemRate = style({
	fontSize: 12,
	color: '#9a9a9a',
});

const empty = style({
	padding: 24,
	textAlign: 'center',
	color: '#9a9a9a',
	fontSize: 14,
});

const srOnly = style({
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

export const orderHistoryStyles = {
	wrap,
	title,
	list,
	item,
	itemLeft,
	itemType,
	itemDate,
	itemRight,
	itemFrom,
	itemTo,
	itemRate,
	empty,
	srOnly,
};
