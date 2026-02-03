import { PropsWithChildren, useState } from 'react';

import { AuthContext } from './auth-context';

import { tokenUtils } from '@/shared/apis';

export function AuthContextProvider({ children }: PropsWithChildren) {
	const [isAuthenticated, setIsAuthenticated] = useState(
		() => !!tokenUtils.getToken(),
	);
	const [memberId, setMemberId] = useState<number | null>(null);

	const login = (token: string, memberId: number) => {
		tokenUtils.setToken(token);
		setMemberId(memberId);
		setIsAuthenticated(true);
	};

	const logout = () => {
		tokenUtils.removeToken();
		setMemberId(null);
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider value={{ memberId, isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}
