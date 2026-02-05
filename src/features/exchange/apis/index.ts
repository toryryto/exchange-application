import { instance, ApiResponse } from '@/shared/apis';

const CURRENCY_NAMES: Record<string, string> = {
	USD: '미국 달러',
	JPY: '일본 엔화',
	EUR: '유로',
	CNY: '중국 위안',
	GBP: '영국 파운드',
};

type ApiExchangeRate = {
	exchangeRateId: number;
	currency: string;
	rate: number;
	changePercentage: number;
	applyDateTime: string;
};

export type ExchangeRate = {
	id: number;
	currencyCode: string;
	currencyName: string;
	rate: number;
	changePercent: number;
	applyDateTime: string;
};

const getLatest = async (): Promise<ExchangeRate[]> => {
	const res = await instance.get<ApiResponse<ApiExchangeRate[]>>(
		'/exchange-rates/latest',
	);

	return res.data.data.map(item => ({
		id: item.exchangeRateId,
		currencyCode: item.currency,
		currencyName: CURRENCY_NAMES[item.currency] ?? item.currency,
		rate: item.rate,
		changePercent: item.changePercentage,
		applyDateTime: item.applyDateTime,
	}));
};

export const ExchangeRatesAPI = { getLatest };
