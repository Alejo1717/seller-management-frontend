import { createProxyMiddleware } from "http-proxy-middleware";

const TARGET = process.env.REACT_APP_PORTA_API;

module.exports = (app: any) => {
	app.use(
		"/api",
		createProxyMiddleware({
			target: TARGET,
			changeOrigin: true,
			secure: false,
			pathRewrite: {
				"^/api": ""
			}
		})
	);
};
