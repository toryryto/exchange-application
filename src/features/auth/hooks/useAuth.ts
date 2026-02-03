import { use } from 'react';

import { AuthContext } from '../contexts/auth-context';

export const useAuth = () => {
	const context = use(AuthContext);
	if (!context) {
		throw new Error('useAuth는 AuthContextProvider 내부에서만 사용가능힙니다.');
	}
	return context;
};
