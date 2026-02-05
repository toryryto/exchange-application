import { style } from '@vanilla-extract/css';

export const wrap = style({
	display: 'grid',
	gridTemplateColumns: '1fr 400px',
	gap: 24,
	padding: 40,
	maxWidth: 1200,
	margin: '0 auto',
});

export const leftSection = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 24,
});

export const rateSection = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 16,
});

export const sectionTitle = style({
	width: '100%',
	fontSize: 24,
	fontWeight: 700,
	color: '#252525',
	marginBottom: 4,
});

export const sectionDescription = style({
	fontSize: 14,
	color: '#6b6b6b',
	textDecoration: 'underline',
	marginBottom: 8,
});

export const rateCards = style({
	display: 'flex',
	gap: 16,
});

export const walletSection = style({
	padding: 24,
	border: '1px solid #e5e5e5',
	borderRadius: 12,
	flex: 1,
});

export const walletTitle = style({
	fontSize: 18,
	fontWeight: 700,
	color: '#252525',
	marginBottom: 20,
});

export const walletList = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 12,
});

export const walletItem = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	fontSize: 14,
	color: '#252525',
});

export const walletCurrency = style({
	color: '#6b6b6b',
});

export const walletAmount = style({
	fontWeight: 500,
});

export const walletDivider = style({
	height: 1,
	backgroundColor: '#e5e5e5',
	margin: '16px 0',
});

export const walletTotal = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingTop: 16,
	borderTop: '1px solid #e5e5e5',
});

export const walletTotalLabel = style({
	fontSize: 14,
	color: '#6b6b6b',
});

export const walletTotalAmount = style({
	fontSize: 18,
	fontWeight: 700,
	color: '#1e88e5',
});

export const rightSection = style({
	padding: 24,
	border: '1px solid #e5e5e5',
	borderRadius: 12,
	height: 'fit-content',
});
