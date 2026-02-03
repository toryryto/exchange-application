import { instance, ApiResponse } from '@/shared/apis';

type LoginData = {
	token: string;
	memberId: number;
};

const login = async (email: string): Promise<LoginData> => {
	const res = await instance.post<ApiResponse<LoginData>>('/auth/login', null, {
		params: { email },
	});
	return res.data.data;
};

export const AuthAPI = { login };
