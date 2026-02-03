import { Outlet } from 'react-router-dom';

import { Header } from '../ui/header/header';

export function Layout() {
	return (
		<>
			<Header />

			<main>
				<Outlet />
			</main>
		</>
	);
}
