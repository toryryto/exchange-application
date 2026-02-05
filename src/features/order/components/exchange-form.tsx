import { useState, useMemo, useId } from 'react';

import * as styles from './exchange-form.css';

import { useExchangeRates } from '@/features/exchange/hooks/useExchangeRates';
import { useQuote, type Currency } from '@/features/order/hooks/useQuote';
import { useCreateOrder, isRateMismatchError } from '@/features/order/hooks/useCreateOrder';

type OrderType = 'buy' | 'sell';

const CURRENCY_OPTIONS: { code: Currency; name: string; flag: string }[] = [
	{ code: 'USD', name: '달러', flag: '🇺🇸' },
	{ code: 'JPY', name: '엔', flag: '🇯🇵' },
];

export function ExchangeForm() {
	const formId = useId();
	const [selectedCurrency, setSelectedCurrency] = useState<Currency>('USD');
	const [orderType, setOrderType] = useState<OrderType>('buy');
	const [amount, setAmount] = useState('');

	const currencyOption = CURRENCY_OPTIONS.find(c => c.code === selectedCurrency);

	const { data: rates } = useExchangeRates();
	const selectedRate = rates?.find(r => r.currencyCode === selectedCurrency);

	const quoteParams = useMemo(() => {
		const parsedAmount = parseFloat(amount);
		if (isNaN(parsedAmount) || parsedAmount < 0.01) return null;

		return {
			fromCurrency: orderType === 'buy' ? ('KRW' as Currency) : selectedCurrency,
			toCurrency: orderType === 'buy' ? selectedCurrency : ('KRW' as Currency),
			forexAmount: parsedAmount,
		};
	}, [amount, orderType, selectedCurrency]);

	const { data: quote, isLoading: isQuoteLoading } = useQuote(quoteParams);
	const { mutate: createOrder, isPending: isOrderPending, error: orderError } = useCreateOrder();

	const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (value === '' || /^\d*\.?\d*$/.test(value)) {
			setAmount(value);
		}
	};

	const handleSubmit = () => {
		if (!quote || !selectedRate || !quoteParams) return;

		createOrder(
			{
				exchangeRateId: selectedRate.id,
				fromCurrency: quoteParams.fromCurrency,
				toCurrency: quoteParams.toCurrency,
				forexAmount: quoteParams.forexAmount,
			},
			{
				onSuccess: () => {
					setAmount('');
					alert('환전이 완료되었습니다.');
				},
				onError: error => {
					if (isRateMismatchError(error)) {
						alert('환율이 변동되었습니다. 다시 시도해주세요.');
					} else {
						alert('환전에 실패했습니다. 다시 시도해주세요.');
					}
				},
			},
		);
	};

	const isLoading = isQuoteLoading || isOrderPending;
	const resultLabel = orderType === 'buy' ? '필요 원화' : '받을 원화';
	const resultSuffix = orderType === 'buy' ? '원 필요해요' : '원 받아요';
	const inputSuffix =
		orderType === 'buy'
			? `${currencyOption?.name} 사기`
			: `${currencyOption?.name} 팔기`;

	const titleId = `${formId}-title`;
	const amountInputId = `${formId}-amount`;
	const amountDescId = `${formId}-amount-desc`;
	const resultId = `${formId}-result`;
	const rateId = `${formId}-rate`;
	const buyTabId = `${formId}-tab-buy`;
	const sellTabId = `${formId}-tab-sell`;
	const panelId = `${formId}-panel`;

	return (
		<form
			className={styles.wrap}
			role='form'
			aria-labelledby={titleId}
			onSubmit={e => {
				e.preventDefault();
				handleSubmit();
			}}
		>
			<div className={styles.header}>
				<h2 id={titleId} className={styles.srOnly}>
					환전 주문
				</h2>
				<select
					className={styles.currencySelect}
					value={selectedCurrency}
					onChange={e => setSelectedCurrency(e.target.value as Currency)}
					aria-label='환전할 통화 선택'
				>
					{CURRENCY_OPTIONS.map(option => (
						<option key={option.code} value={option.code}>
							{option.flag} {option.code} 환전하기
						</option>
					))}
				</select>
			</div>

			<div className={styles.tabs} role='tablist' aria-label='매수/매도 선택'>
				<button
					type='button'
					id={buyTabId}
					className={`${styles.tab} ${orderType === 'buy' ? styles.tabActive : ''}`}
					onClick={() => setOrderType('buy')}
					role='tab'
					aria-selected={orderType === 'buy'}
					aria-controls={panelId}
					tabIndex={orderType === 'buy' ? 0 : -1}
				>
					살래요
				</button>
				<button
					type='button'
					id={sellTabId}
					className={`${styles.tab} ${orderType === 'sell' ? styles.tabSell : ''}`}
					onClick={() => setOrderType('sell')}
					role='tab'
					aria-selected={orderType === 'sell'}
					aria-controls={panelId}
					tabIndex={orderType === 'sell' ? 0 : -1}
				>
					팔래요
				</button>
			</div>

			<div
				id={panelId}
				role='tabpanel'
				aria-labelledby={orderType === 'buy' ? buyTabId : sellTabId}
				className={styles.inputSection}
			>
				<div className={styles.inputGroup}>
					<label className={styles.inputLabel} htmlFor={amountInputId}>
						{orderType === 'buy' ? '매수 금액' : '매도 금액'}
					</label>
					<div className={styles.inputWrap}>
						<input
							id={amountInputId}
							className={styles.input}
							type='text'
							inputMode='decimal'
							placeholder='0'
							value={amount}
							onChange={handleAmountChange}
							aria-describedby={amountDescId}
							aria-invalid={amount !== '' && parseFloat(amount) < 0.01}
							disabled={isOrderPending}
						/>
						<span id={amountDescId} className={styles.inputSuffix}>
							{inputSuffix}
						</span>
					</div>
				</div>

				<div className={styles.arrowIcon} aria-hidden='true'>
					<svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
						<path
							d='M12 4L12 20M12 20L6 14M12 20L18 14'
							stroke='#9a9a9a'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>

				<div className={styles.inputGroup}>
					<span id={`${resultId}-label`} className={styles.inputLabel}>
						{resultLabel}
					</span>
					<div
						id={resultId}
						className={styles.resultWrap}
						role='status'
						aria-live='polite'
						aria-busy={isLoading}
						aria-labelledby={`${resultId}-label`}
					>
						<span className={styles.resultAmount}>
							{isQuoteLoading
								? '계산 중...'
								: quote
									? quote.krwAmount.toLocaleString('ko-KR')
									: '0'}
						</span>
						<span className={styles.resultSuffix} aria-hidden='true'>
							{resultSuffix}
						</span>
						<span className={styles.srOnly}>
							{quote
								? `${quote.krwAmount.toLocaleString('ko-KR')} ${resultSuffix}`
								: '금액을 입력해주세요'}
						</span>
					</div>
				</div>
			</div>

			<div className={styles.divider} aria-hidden='true' />

			<div
				id={rateId}
				className={styles.rateInfo}
				role='status'
				aria-label={
					quote
						? `적용 환율: 1 ${selectedCurrency}당 ${quote.appliedRate.toLocaleString('ko-KR')} 원`
						: '적용 환율 정보 없음'
				}
			>
				<span aria-hidden='true'>적용 환율</span>
				<span className={styles.rateValue} aria-hidden='true'>
					{quote
						? `1 ${selectedCurrency} = ${quote.appliedRate.toLocaleString('ko-KR')} 원`
						: '-'}
				</span>
			</div>

			<button
				type='submit'
				className={styles.submitButton}
				disabled={!quote || isLoading || !selectedRate}
				aria-describedby={resultId}
			>
				{isOrderPending ? '처리 중...' : '환전하기'}
			</button>
		</form>
	);
}
