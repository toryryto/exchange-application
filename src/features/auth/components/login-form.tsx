import { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { AuthAPI } from '../apis';
import { useAuth } from '../hooks/useAuth';

import { loginFormStyles as styles } from './login-form.css';

import { Spinner } from '@/shared/components/ui/spinner/spinner';

export function LoginForm() {
	const navigate = useNavigate();
	const { login } = useAuth();
	const [email, setEmail] = useState('');
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleLoginSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError(null);
		setIsLoading(true);

		try {
			const res = await AuthAPI.login(email);
			login(res.token, res.memberId);
			navigate('/');
		} catch (error) {
			if (!axios.isAxiosError(error)) return;
			setError(error.response?.data.message || '로그인에 실패했습니다.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form className={styles.form} onSubmit={handleLoginSubmit}>
			<label htmlFor='email' className={styles.label}>
				이메일을 입력해주세요.
			</label>

			<input
				type='email'
				id='email'
				name='email'
				value={email}
				onChange={e => setEmail(e.target.value)}
				className={error ? styles.inputError : styles.input}
				required
				aria-required='true'
				aria-invalid={!!error}
				aria-describedby={error ? 'email-error' : undefined}
				placeholder='example@email.com'
			/>

			{error && (
				<p id='email-error' role='alert' className={styles.errorMessage}>
					{error}
				</p>
			)}

			<button type='submit' className={styles.button} disabled={isLoading}>
				{isLoading ? <Spinner /> : '시작하기'}
			</button>
		</form>
	);
}
