import * as styles from './home-page.css';

import { RateCard } from '@/features/exchange/components/rate/rate-card';

export function HomePage() {
	return (
		<section className={styles.wrap}>
			<div className={styles.leftSection}>
				<div className={styles.rateSection}>
					<h1 className={styles.sectionTitle}>환율 정보</h1>
					<p className={styles.sectionDescription}>
						실시간 환율을 확인하고 간편하게 환전하세요
					</p>
					<div className={styles.rateCards}>
						<RateCard
							currencyCode='USD'
							currencyName='미국 달러'
							rate={1320.5}
							changePercent={0.5}
						/>
						<RateCard
							currencyCode='JPY'
							currencyName='일본 엔화'
							rate={9.85}
							changePercent={-1.1}
						/>
					</div>
				</div>

				<div className={styles.walletSection}></div>
			</div>

			<div className={styles.rightSection}>{/* TODO: 환전하기 폼 */}</div>
		</section>
	);
}
