import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { OrderAPI, type OrderRequest, type OrderError } from '@/features/order/apis';

export function useCreateOrder() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (request: OrderRequest) => OrderAPI.createOrder(request),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['wallet'] });
			queryClient.invalidateQueries({ queryKey: ['exchangeRates'] });
		},
		onError: (error: AxiosError<{ code: string; message: string }>) => {
			const errorCode = error.response?.data?.code;

			if (errorCode === 'EXCHANGE_RATE_MISMATCH') {
				queryClient.invalidateQueries({ queryKey: ['exchangeRates'] });
			}
		},
	});
}

export const isRateMismatchError = (error: unknown): boolean => {
	if (error instanceof AxiosError) {
		return error.response?.data?.code === 'EXCHANGE_RATE_MISMATCH';
	}
	return false;
};
