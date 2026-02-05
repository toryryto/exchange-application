import { StrictMode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './features/auth/contexts/auth-context-provider';
import { ErrorBoundary } from './shared/components/ui/error-boundary/error-boundary';

import { Router } from '@/router';

import '@/shared/styles/global.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ErrorBoundary>
			<QueryClientProvider client={queryClient}>
				<AuthContextProvider>
					<BrowserRouter>
						<Router />
					</BrowserRouter>
				</AuthContextProvider>
			</QueryClientProvider>
		</ErrorBoundary>
	</StrictMode>,
);
