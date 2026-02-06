import { useQuery } from '@tanstack/react-query';

import { OrderAPI, type Order } from '@/features/order/apis';
import { MINUTE, SECOND } from '@/shared/constants/time';

export type { Order };

export function useOrders() {
	return useQuery({
		queryKey: ['orders'],
		queryFn: OrderAPI.getOrders,
		staleTime: 30 * SECOND,
	});
}
