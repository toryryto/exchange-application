import { useQuery } from '@tanstack/react-query';

import { OrderAPI, type Quote, type QuoteParams, type Currency } from '@/features/order/apis';
import { SECOND } from '@/shared/constants/time';

export type { Quote, QuoteParams, Currency };

export function useQuote(params: QuoteParams | null) {
	return useQuery({
		queryKey: ['quote', params],
		queryFn: () => OrderAPI.getQuote(params!),
		enabled: params !== null && params.forexAmount >= 0.01,
		staleTime: 10 * SECOND,
	});
}
