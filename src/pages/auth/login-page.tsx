import { loginPageStyles as styles } from './login-page.css';

import { LoginForm } from '@/features/auth/components/login-form';

export function LoginPage() {
	return (
		<section className={styles.section}>
			<div className={styles.titleWrap}>
				<h1 className={styles.title}>반갑습니다.</h1>

				<h4 className={styles.subTitle}>로그인 정보를 입력해주세요.</h4>
			</div>

			<LoginForm />
		</section>
	);
}
