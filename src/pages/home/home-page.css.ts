import { style } from '@vanilla-extract/css';

export const wrap = style({
	display: 'grid',
	gridTemplateColumns: '1fr 400px',
	gap: 24,
	padding: 40,
	maxWidth: 1200,
	margin: '0 auto',
	minHeight: 'calc(100vh - 120px)',
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

export const rightSection = style({
	padding: 24,
	border: '1px solid #e5e5e5',
	borderRadius: 12,
	height: 'fit-content',
});
