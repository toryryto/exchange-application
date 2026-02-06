import { style } from '@vanilla-extract/css';

const wrap = style({
	display: 'flex',
	flexDirection: 'column',
	padding: 24,
	border: '1px solid #e5e5e5',
	borderRadius: 12,
	flex: 1,
});

const title = style({
	fontSize: 18,
	fontWeight: 700,
	color: '#252525',
	marginBottom: 20,
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
	fontSize: 14,
	color: '#252525',
});

const currency = style({
	color: '#6b6b6b',
});

const amount = style({
	fontWeight: 500,
});

const total = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingTop: 16,
	marginTop: 'auto',
	borderTop: '1px solid #e5e5e5',
});

const totalLabel = style({
	fontSize: 14,
	color: '#6b6b6b',
});

const totalAmount = style({
	fontSize: 18,
	fontWeight: 700,
	color: '#1e88e5',
});

export const walletSummaryStyles = {
	wrap,
	title,
	list,
	item,
	currency,
	amount,
	total,
	totalLabel,
	totalAmount,
};
