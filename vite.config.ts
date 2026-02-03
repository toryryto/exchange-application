import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";

export default defineConfig({
	plugins: [react(), vanillaExtractPlugin()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		proxy: {
			"/api": {
				target: "https://exchange-example.switchflow.biz",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
});
