import { useQuery } from '@tanstack/react-query';

import { WalletAPI, type Wallet } from '@/features/wallet/apis';
import { MINUTE, SECOND } from '@/shared/constants/time';

export type { Wallet };

export function useMyWallet() {
	return useQuery({
		queryKey: ['wallet'],
		queryFn: WalletAPI.getMy,
		refetchInterval: MINUTE,
		refetchOnWindowFocus: true,
		staleTime: 30 * SECOND,
	});
}
