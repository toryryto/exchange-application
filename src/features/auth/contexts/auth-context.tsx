import { createContext, PropsWithChildren } from 'react';

type Context = {
	memberId: number;
};

type State = {
	isAuthenticated: boolean;
};

type Action = {
	type: string;
	payload: {};
};

// type Reducer = (state: State, action: Action) => State;

const AuthContext = createContext<Context | null>(null);

export function AuthContextProvider({ children }: PropsWithChildren) {
	return <>{children}</>;
}
