import * as styles from './wallet-summary.css';

import { useMyWallet } from '@/features/wallet/hooks/useMyWallet';

const CURRENCY_SYMBOLS: Record<string, string> = {
	KRW: '₩',
	USD: '$',
	JPY: '¥',
};

const formatBalance = (currency: string, balance: number) => {
	const symbol = CURRENCY_SYMBOLS[currency] ?? '';
	return `${symbol} ${balance.toLocaleString('ko-KR')}`;
};

export function WalletSummary() {
	const { data: wallet, isLoading, error } = useMyWallet();

	if (isLoading) {
		return <div className={styles.wrap}>로딩 중...</div>;
	}

	if (error) {
		return (
			<div className={styles.wrap}>지갑 정보를 불러오는데 실패했습니다.</div>
		);
	}

	return (
		<div className={styles.wrap} role='region' aria-label='내 지갑'>
			<h2 className={styles.title}>내 지갑</h2>
			<ul className={styles.list}>
				{wallet?.balances.map(item => (
					<li key={item.id} className={styles.item}>
						<span className={styles.currency}>{item.currency}</span>
						<span className={styles.amount}>
							{formatBalance(item.currency, item.balance)}
						</span>
					</li>
				))}
			</ul>
			<div className={styles.total}>
				<span className={styles.totalLabel}>총 보유 자산</span>
				<span className={styles.totalAmount}>
					₩ {wallet?.totalKrwBalance.toLocaleString('ko-KR')}
				</span>
			</div>
		</div>
	);
}
