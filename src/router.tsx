import { Routes, Route } from 'react-router-dom';

import { ProtectedRoute } from './features/auth/components/protected-route';
import { LoginPage } from './pages/auth/login-page';
import { HomePage } from './pages/home/home-page';
import { MyPage } from './pages/my/my-page';
import { Layout } from './shared/components/layout/layout';

export function Router() {
	return (
		<Routes>
			<Route path='/login' element={<LoginPage />} />

			<Route element={<ProtectedRoute />}>
				<Route element={<Layout />}>
					<Route path='/' element={<HomePage />} />
					<Route path='/my' element={<MyPage />} />
				</Route>
			</Route>
		</Routes>
	);
}
