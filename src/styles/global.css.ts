import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
	boxSizing: "border-box",
	margin: 0,
	padding: 0,
});

globalStyle("html", {
	fontSize: "16px",
});

globalStyle("body", {
	fontFamily:
		"'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', sans-serif",
	lineHeight: 1.5,
	backgroundColor: "#e5e5e5",
	color: "#333",
	minHeight: "100vh",
});

globalStyle("#root", {
	minHeight: "100vh",
	display: "flex",
	justifyContent: "center",
});
