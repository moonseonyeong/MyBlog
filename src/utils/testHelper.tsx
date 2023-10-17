import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const wrapper = (Component: React.JSX.Element) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return <QueryClientProvider client={queryClient}>{Component} </QueryClientProvider>;
};
