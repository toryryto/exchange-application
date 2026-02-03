import { createContext } from 'react';

type Context = {
	memberId: number | null;
	isAuthenticated: boolean;
	login: (token: string, memberId: number) => void;
	logout: () => void;
};

export const AuthContext = createContext<Context | null>(null);
