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
	const changeLabel = isPositive ? '상승' : '하락';

	return (
		<article className={styles.wrap} aria-label={`${currencyName} 환율 정보`}>
			<div className={styles.header}>
				<span className={styles.currencyCode}>{currencyCode}</span>
				<span className={styles.currencyName}>{currencyName}</span>
			</div>

			<p className={styles.rate}>
				<span className={styles.srOnly}>현재 환율</span>
				{formattedRate} KRW
			</p>

			<p
				className={isPositive ? styles.changePositive : styles.changeNegative}
				aria-label={`${changeLabel} ${formattedChange}`}>
				<span aria-hidden='true'>{isPositive ? '▲' : '▼'}</span>{' '}
				{formattedChange}
			</p>
		</article>
	);
}
