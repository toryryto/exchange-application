import { instance, ApiResponse } from '@/shared/apis';

export type Wallet = {
	balances: {
		currency: string;
		amount: number;
	}[];
	totalKRW: number;
};

const getMy = async (): Promise<Wallet> => {
	const res = await instance.get<ApiResponse<Wallet>>('/wallet');
	return res.data.data;
};

export const WalletAPI = { getMy };
