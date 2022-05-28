export const isProd = () =>
	process.env.REACT_APP_ENV === "production"
		? process.env.REACT_APP_API_URL
		: "http://localhost:5001";
