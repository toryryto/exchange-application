import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
	boxSizing: 'border-box',
	margin: 0,
	padding: 0,
});

globalStyle('html', {
	fontSize: '16px',
});

globalStyle('body', {
	fontFamily:
		"'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', sans-serif",
	height: '100dvh',
	fontWeight: 400,
});

globalStyle('#root', {
	height: 'inherit',
});

globalStyle('a', {
	color: '#252525',
	textDecoration: 'none',
});
