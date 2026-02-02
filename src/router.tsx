import { Routes, Route } from 'react-router-dom';

import { LoginPage } from './pages/auth/login-page';

export function Router() {
	return (
		<Routes>
			<Route path='/login' element={<LoginPage />} />
		</Routes>
	);
}
