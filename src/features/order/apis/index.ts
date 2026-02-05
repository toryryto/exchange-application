import { instance, ApiResponse } from '@/shared/apis';

export type Currency = 'KRW' | 'USD' | 'JPY';

type ApiQuote = {
	krwAmount: number;
	appliedRate: number;
};

export type QuoteParams = {
	fromCurrency: Currency;
	toCurrency: Currency;
	forexAmount: number;
};

export type Quote = {
	krwAmount: number;
	appliedRate: number;
};

const getQuote = async (params: QuoteParams): Promise<Quote> => {
	const res = await instance.get<ApiResponse<ApiQuote>>('/orders/quote', {
		params,
	});

	return {
		krwAmount: res.data.data.krwAmount,
		appliedRate: res.data.data.appliedRate,
	};
};

export const OrderAPI = { getQuote };
