import { instance, ApiResponse } from '@/shared/apis';

type ApiWallet = {
	walletId: number;
	currency: 'KRW' | 'USD' | 'JPY';
	balance: number;
};

type ApiWalletSummary = {
	totalKrwBalance: number;
	wallets: ApiWallet[];
};

export type WalletBalance = {
	id: number;
	currency: string;
	balance: number;
};

export type WalletSummary = {
	totalKrwBalance: number;
	balances: WalletBalance[];
};

const getMy = async (): Promise<WalletSummary> => {
	const res = await instance.get<ApiResponse<ApiWalletSummary>>('/wallets');

	return {
		totalKrwBalance: res.data.data.totalKrwBalance,
		balances: res.data.data.wallets.map(wallet => ({
			id: wallet.walletId,
			currency: wallet.currency,
			balance: wallet.balance,
		})),
	};
};

export const WalletAPI = { getMy };
