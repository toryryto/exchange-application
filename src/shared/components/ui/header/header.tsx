import { NavLink } from 'react-router-dom';

import { headerStyles as styles } from './header.css';

export function Header() {
	return (
		<header className={styles.wrap}>
			<h1 className={styles.logo}>Exchange App</h1>

			<nav aria-label='메인 메뉴'>
				<ul className={styles.menu} role='list'>
					<li>
						<NavLink
							to='/'
							end
							className={({ isActive }) =>
								isActive ? styles.linkTextActive : styles.linkText
							}>
							환전 하기
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/my'
							className={({ isActive }) =>
								isActive ? styles.linkTextActive : styles.linkText
							}>
							내 환전
						</NavLink>
					</li>
					<li>
						<button type='button' className={styles.logoutButton}>
							Log out
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
}
