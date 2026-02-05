import { style } from '@vanilla-extract/css';

export const wrap = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 24,
	flex: 1,
});

export const header = style({
	display: 'flex',
	alignItems: 'center',
	gap: 8,
});

export const currencySelect = style({
	display: 'flex',
	alignItems: 'center',
	gap: 8,
	padding: '8px 12px',
	border: 'none',
	background: 'transparent',
	fontSize: 16,
	fontWeight: 600,
	color: '#252525',
	cursor: 'pointer',
});

export const tabs = style({
	display: 'flex',
	gap: 0,
});

export const tab = style({
	flex: 1,
	padding: '12px 24px',
	border: '1px solid #e5e5e5',
	background: '#fff',
	fontSize: 14,
	fontWeight: 500,
	color: '#6b6b6b',
	cursor: 'pointer',
	transition: 'all 0.2s',
	':first-child': {
		borderRadius: '8px 0 0 8px',
	},
	':last-child': {
		borderRadius: '0 8px 8px 0',
		borderLeft: 'none',
	},
});

export const tabActive = style({
	background: '#ef5350',
	borderColor: '#ef5350',
	color: '#fff',
});

export const tabSell = style({
	background: '#1e88e5',
	borderColor: '#1e88e5',
	color: '#fff',
});

export const inputSection = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 16,
});

export const inputGroup = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 8,
});

export const inputLabel = style({
	fontSize: 14,
	color: '#6b6b6b',
});

export const inputWrap = style({
	display: 'flex',
	alignItems: 'center',
	padding: '12px 16px',
	border: '1px solid #e5e5e5',
	borderRadius: 8,
	gap: 8,
});

export const input = style({
	flex: 1,
	border: 'none',
	outline: 'none',
	fontSize: 16,
	textAlign: 'right',
	'::placeholder': {
		color: '#9a9a9a',
	},
});

export const inputSuffix = style({
	fontSize: 14,
	color: '#6b6b6b',
	whiteSpace: 'nowrap',
});

export const arrowIcon = style({
	display: 'flex',
	justifyContent: 'center',
	padding: '8px 0',
});

export const resultWrap = style({
	display: 'flex',
	alignItems: 'center',
	padding: '12px 16px',
	border: '1px solid #e5e5e5',
	borderRadius: 8,
	background: '#fafafa',
});

export const resultAmount = style({
	flex: 1,
	fontSize: 16,
	fontWeight: 500,
	textAlign: 'right',
	color: '#252525',
});

export const resultSuffix = style({
	fontSize: 14,
	fontWeight: 500,
	color: '#1e88e5',
	marginLeft: 8,
});

export const divider = style({
	height: 1,
	background: '#e5e5e5',
});

export const rateInfo = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	fontSize: 14,
	color: '#6b6b6b',
});

export const rateValue = style({
	fontWeight: 500,
	color: '#252525',
});

export const submitButton = style({
	marginTop: 'auto',
	padding: '16px 24px',
	border: 'none',
	borderRadius: 8,
	background: '#1a1a2e',
	fontSize: 16,
	fontWeight: 600,
	color: '#fff',
	cursor: 'pointer',
	transition: 'background 0.2s',
	':hover': {
		background: '#2d2d44',
	},
	':disabled': {
		background: '#9a9a9a',
		cursor: 'not-allowed',
	},
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
