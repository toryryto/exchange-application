import { style } from '@vanilla-extract/css';

export const wrap = style({
	display: 'grid',
	gridTemplateColumns: '2fr 1fr',
	gap: 24,
});

export const leftWrap = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 16,
});

export const rateCards = style({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: 16,
});

export const walletCard = style({});

export const exchangeForm = style({});
