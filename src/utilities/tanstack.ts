import { QueryClient } from '@tanstack/react-query';
import type { Persister } from '@tanstack/react-query-persist-client';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 60,
            retry: 3,
            refetchOnMount: true,
            refetchOnWindowFocus: true,
            gcTime: 1000 * 60 * 60,
        },
    },
});

export const localStoragePersister: Persister = {
    persistClient: (client) => {
        window.localStorage.setItem('portfolio-cache', JSON.stringify(client));
    },
    restoreClient: () => {
        const cache = window.localStorage.getItem('portfolio-cache');
        if (!cache) return undefined;
        try {
            return JSON.parse(cache);
        } catch (error) {
            console.error("Failed to parse cache", error);
            return undefined;
        }
    },
    removeClient: () => {
        window.localStorage.removeItem('portfolio-cache');
    }
};