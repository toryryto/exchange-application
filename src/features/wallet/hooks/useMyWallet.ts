import { useQuery } from '@tanstack/react-query';

import {
	WalletAPI,
	type WalletSummary,
	type WalletBalance,
} from '@/features/wallet/apis';
import { MINUTE, SECOND } from '@/shared/constants/time';

export type { WalletSummary, WalletBalance };

export function useMyWallet() {
	return useQuery({
		queryKey: ['wallet'],
		queryFn: WalletAPI.getMy,
		refetchInterval: MINUTE,
		refetchOnWindowFocus: true,
		staleTime: 30 * SECOND,
	});
}
