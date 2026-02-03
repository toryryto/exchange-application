import { Routes, Route } from 'react-router-dom';

import { ProtectedRoute } from './features/auth/components/protected-route';
import { LoginPage } from './pages/auth/login-page';
import { HomePage } from './pages/home/home-page';

export function Router() {
	return (
		<Routes>
			<Route path='/login' element={<LoginPage />} />

			<Route element={<ProtectedRoute />}>
				<Route path='/' element={<HomePage />} />
			</Route>
		</Routes>
	);
}
