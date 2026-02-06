import * as styles from './exchange-dashboard.css';

import { RateCard } from '@/features/exchange/components/rate/rate-card';
import { useExchangeRates } from '@/features/exchange/hooks/useExchangeRates';
import { Spinner } from '@/shared/components/ui/spinner/spinner';

export function ExchangeDashboard() {
	const { data: rates, isLoading, error } = useExchangeRates();

	if (isLoading) {
		return <Spinner />;
	}

	if (error) {
		return <div>환율 정보를 불러오는데 실패했습니다.</div>;
	}

	return (
		<section className={styles.wrap}>
			<div className={styles.leftWrap}>
				<div className={styles.rateCards}>
					{rates?.map(rate => (
						<RateCard
							key={rate.currencyCode}
							currencyCode={rate.currencyCode}
							currencyName={rate.currencyName}
							rate={rate.rate}
							changePercent={rate.changePercent}
						/>
					))}
				</div>

				<div className={styles.walletCard}>내 지갑</div>
			</div>

			<div className={styles.exchangeForm}>환전하기</div>
		</section>
	);
}
