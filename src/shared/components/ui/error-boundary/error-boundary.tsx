import { Component, ReactNode } from 'react';

import * as styles from './error-boundary.css';

interface ErrorBoundaryProps {
	children: ReactNode;
	fallback?: ReactNode;
	onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
	variant?: 'fullscreen' | 'inline';
}

interface ErrorBoundaryState {
	hasError: boolean;
	error: Error | null;
}

export class ErrorBoundary extends Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		this.props.onError?.(error, errorInfo);
	}

	handleRetry = (): void => {
		this.setState({ hasError: false, error: null });
	};

	render(): ReactNode {
		const { hasError, error } = this.state;
		const { children, fallback, variant = 'fullscreen' } = this.props;

		if (hasError) {
			if (fallback) {
				return fallback;
			}

			return (
				<div className={styles.container[variant]} role='alert'>
					<h2 className={styles.title}>문제가 발생했습니다</h2>
					<p className={styles.message}>
						{error?.message || '알 수 없는 오류가 발생했습니다.'}
					</p>
					<button
						type='button'
						className={styles.retryButton}
						onClick={this.handleRetry}>
						다시 시도하기
					</button>
				</div>
			);
		}

		return children;
	}
}
