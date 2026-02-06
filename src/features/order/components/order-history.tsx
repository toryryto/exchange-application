import { orderHistoryStyles as styles } from './order-history.css';

import { useOrders, type Order } from '@/features/order/hooks/useOrders';
import { Spinner } from '@/shared/components/ui/spinner/spinner';

const CURRENCY_SYMBOLS: Record<string, string> = {
	KRW: '₩',
	USD: '$',
	JPY: '¥',
};

const formatAmount = (currency: string, amount: number) => {
	const symbol = CURRENCY_SYMBOLS[currency] ?? '';
	return `${symbol} ${amount.toLocaleString('ko-KR')}`;
};

const formatDate = (date: Date) => {
	return date.toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
	});
};

const getOrderType = (order: Order) => {
	if (order.fromCurrency === 'KRW') {
		return `${order.toCurrency} 매수`;
	}
	return `${order.fromCurrency} 매도`;
};

export function OrderHistory() {
	const { data: orders, isLoading, error } = useOrders();

	if (isLoading) {
		return (
			<div className={styles.wrap}>
				<Spinner />
			</div>
		);
	}

	if (error) {
		return (
			<div className={styles.wrap}>환전 내역을 불러오는데 실패했습니다.</div>
		);
	}

	return (
		<div className={styles.wrap} role='region'>
			{orders?.length ? (
				<ul className={styles.list}>
					{orders?.map(order => (
						<li key={order.id} className={styles.item}>
							<div className={styles.itemLeft}>
								<span className={styles.itemType}>{getOrderType(order)}</span>
								<span className={styles.itemDate}>
									{formatDate(order.orderedAt)}
								</span>
							</div>
							<div className={styles.itemRight}>
								<span className={styles.itemFrom} aria-label='지불 금액'>
									{formatAmount(order.fromCurrency, order.fromAmount)}
								</span>
								<span className={styles.itemTo} aria-label='받은 금액'>
									→ {formatAmount(order.toCurrency, order.toAmount)}
								</span>
								<span className={styles.itemRate} aria-label='적용 환율'>
									1{' '}
									{order.fromCurrency === 'KRW'
										? order.toCurrency
										: order.fromCurrency}{' '}
									= {order.appliedRate.toLocaleString('ko-KR')} 원
								</span>
							</div>
							<span className={styles.srOnly}>
								{getOrderType(order)}, {formatDate(order.orderedAt)},
								{formatAmount(order.fromCurrency, order.fromAmount)}에서
								{formatAmount(order.toCurrency, order.toAmount)}로 환전, 적용
								환율 {order.appliedRate.toLocaleString('ko-KR')} 원
							</span>
						</li>
					))}
				</ul>
			) : (
				<div className={styles.empty}>환전 내역이 없습니다.</div>
			)}
		</div>
	);
}
