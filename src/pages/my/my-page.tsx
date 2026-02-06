import { myPageStyles as styles } from './my-page.css';

import { OrderHistory } from '@/features/order/components/order-history';

export function MyPage() {
	return (
		<section className={styles.wrap}>
			<h1 className={styles.title}>환전 내역</h1>
			<OrderHistory />
		</section>
	);
}
