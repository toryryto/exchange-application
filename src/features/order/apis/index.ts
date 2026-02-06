import { instance, ApiResponse } from '@/shared/apis';

export type Currency = 'KRW' | 'USD' | 'JPY';

type ApiQuote = {
	krwAmount: number;
	appliedRate: number;
};

type ApiOrder = {
	orderId: number;
	fromCurrency: Currency;
	fromAmount: number;
	toCurrency: Currency;
	toAmount: number;
	appliedRate: number;
	orderedAt: string;
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

export type OrderRequest = {
	exchangeRateId: number;
	fromCurrency: Currency;
	toCurrency: Currency;
	forexAmount: number;
};

export type OrderError = {
	code: string;
	message: string;
};

export type Order = {
	id: number;
	fromCurrency: Currency;
	fromAmount: number;
	toCurrency: Currency;
	toAmount: number;
	appliedRate: number;
	orderedAt: Date;
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

const createOrder = async (request: OrderRequest): Promise<void> => {
	await instance.post<ApiResponse<object>>('/orders', request);
};

const getOrders = async (): Promise<Order[]> => {
	const res = await instance.get<ApiResponse<ApiOrder[]>>('/orders');

	return res.data.data.map(order => ({
		id: order.orderId,
		fromCurrency: order.fromCurrency,
		fromAmount: order.fromAmount,
		toCurrency: order.toCurrency,
		toAmount: order.toAmount,
		appliedRate: order.appliedRate,
		orderedAt: new Date(order.orderedAt),
	}));
};

export const OrderAPI = { getQuote, createOrder, getOrders };
