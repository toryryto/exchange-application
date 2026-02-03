import axios from 'axios';

const TOKEN_KEY = 'access_token';

export type ApiResponse<T> = {
	code: string;
	message: string;
	data: T;
};

export const instance = axios.create({
	baseURL: '/api',
});

instance.interceptors.request.use(config => {
	const token = localStorage.getItem(TOKEN_KEY);

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

instance.interceptors.response.use(
	response => response,
	error => {
		if (error.response?.status === 401) {
			localStorage.removeItem(TOKEN_KEY);
			window.location.href = '/login';
		}
		return Promise.reject(error);
	},
);

export const tokenUtils = {
	setToken: (token: string) => localStorage.setItem(TOKEN_KEY, token),
	removeToken: () => localStorage.removeItem(TOKEN_KEY),
	getToken: () => localStorage.getItem(TOKEN_KEY),
};
