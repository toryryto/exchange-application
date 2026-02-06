import * as styles from './home-page.css';

import { RateCard } from '@/features/exchange/components/rate/rate-card';
import { useExchangeRates } from '@/features/exchange/hooks/useExchangeRates';
import { ExchangeForm } from '@/features/order/components/exchange-form';
import { WalletSummary } from '@/features/wallet/components/wallet-summary';
import { Spinner } from '@/shared/components/ui/spinner/spinner';

export function HomePage() {
	const { data: rates, isLoading, error } = useExchangeRates();

	if (isLoading) {
		return <Spinner />;
	}

	if (error) {
		return <div>환율 정보를 불러오는데 실패했습니다.</div>;
	}

	return (
		<section className={styles.wrap}>
			<div className={styles.leftSection}>
				<div className={styles.rateSection}>
					<h1 className={styles.sectionTitle}>환율 정보</h1>
					<p className={styles.sectionDescription}>
						실시간 환율을 확인하고 간편하게 환전하세요
					</p>
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
				</div>

				<WalletSummary />
			</div>

			<div className={styles.rightSection}>
				<ExchangeForm />
			</div>
		</section>
	);
}
