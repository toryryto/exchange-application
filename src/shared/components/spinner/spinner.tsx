import { spinnerStyles as styles } from './spinner.css';

export function Spinner() {
	return (
		<div className={styles.wrapper} role='status' aria-live='polite'>
			<div className={styles.spinner} aria-hidden='true' />
		</div>
	);
}
