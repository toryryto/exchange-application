import { loginFormStyles as styles } from './login-form.css';

export function LoginForm() {
	return (
		<form className={styles.form}>
			<label htmlFor='email' className={styles.label}>
				이메일을 입력해주세요.
			</label>

			<input
				type='email'
				id='email'
				name='email'
				className={styles.input}
				required
				aria-required
				placeholder='example@email.com'
			/>

			<button type='submit' className={styles.button} aria-label='로그인하기'>
				시작하기
			</button>
		</form>
	);
}
