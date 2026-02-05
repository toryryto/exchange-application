import * as styles from './rate-card.css';

interface RateCardProps {
	currencyCode: string;
	currencyName: string;
	rate: number;
	changePercent: number;
}

export function RateCard({
	currencyCode,
	currencyName,
	rate,
	changePercent,
}: RateCardProps) {
	const isPositive = changePercent >= 0;
	const formattedRate = rate.toLocaleString('ko-KR', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
	const formattedChange = `${isPositive ? '+' : ''}${changePercent.toFixed(1)}%`;

	return (
		<article className={styles.wrap}>
			<div className={styles.header}>
				<span className={styles.currencyCode}>{currencyCode}</span>
				<span className={styles.currencyName}>{currencyName}</span>
			</div>

			<p className={styles.rate}>{formattedRate} KRW</p>

			<p className={isPositive ? styles.changePositive : styles.changeNegative}>
				{isPositive ? '▲' : '▼'} {formattedChange}
			</p>
		</article>
	);
}
