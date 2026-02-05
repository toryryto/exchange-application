import { useQuery } from '@tanstack/react-query';

import { ExchangeRatesAPI, type ExchangeRate } from '@/features/exchange/apis';
import { MINUTE, SECOND } from '@/shared/constants/time';

export type { ExchangeRate };

export function useExchangeRates() {
	return useQuery({
		queryKey: ['exchangeRates'],
		queryFn: ExchangeRatesAPI.getLatest,
		refetchInterval: MINUTE,
		refetchOnWindowFocus: true,
		staleTime: 30 * SECOND,
	});
}
